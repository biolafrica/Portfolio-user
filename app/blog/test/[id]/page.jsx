"use client"
import { ArrowLeftCircleIcon, CalendarDateRangeIcon, ClockIcon, ShareIcon } from "@heroicons/react/24/outline";

/**
 * BlogDetailPage - Accepts simple blog form data and renders it beautifully
 * 
 * FIXED VERSION - Handles all edge cases and undefined errors
 * 
 * This component accepts the kind of data you'd get from a simple blog form:
 * - Title (text input)
 * - Author name (text input)
 * - Read time (text input)
 * - Date (date input)
 * - Content (textarea with markdown-like formatting)
 * - Images (1-3 image URLs)
 */

const BlogDetailPage = ({ blogPost }) => {
  // Example of simple form data structure
  const defaultBlogPost = {
    title: "Crafting a design system for a multiplanetary future",
    author: "John Doe",
    date: "2022-09-05",
    readTime: "8 min read",
    content: `Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.

    ## Sermone fata

    Lorem markdownum, suis hi scenula in medibusm. Terque unxis augere nec, linguae posteriore in ultriciae respondere candidus Mimasque formas; quae conventuri cervice.

    \`\`\`javascript
    exbibyte_wins = gigahertz(3);
    gravitsAlallityCiient = control_uat;
    if (stateWidth(figure >= 2) {
        jfs = 647065 + ldapVirtl(tutorialRestore, 85);
    }
    \`\`\`

    Aere repetit cognataque natuis. Habenset wela sodalis saepe munus nondum adque oscula nomena pignora corpore desertat.

    ## Lethaei Pindumve me quae dinumerat Pavor

    Idem se saxa fata pollentibus gimmis; quos petibus.

    1. Captus inperveruit collo
    2. Nec nam placebant
    3. Siquis vultgus
    4. Dictis caristeme fugiae

    Ungues flatula amosso, ille addit litusque mortuique laborsur versus nullaverent contine devastique.`,
    images: [
      "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop"
    ]
  };

  const blog = blogPost || defaultBlogPost;

  // Parse markdown-like content and split into sections - WITH ROBUST ERROR HANDLING
  const parseContent = (content) => {
    if (!content) return [];

    const sections = [];
    const lines = content.split('\n');
    let currentSection = { type: 'text', content: [] };
    let inCodeBlock = false;
    let codeContent = [];
    let codeLanguage = '';

    lines.forEach((line) => {
      // Check for code block start/end
      if (line.trim().startsWith('```')) {
        if (!inCodeBlock) {
          // Start of code block
          inCodeBlock = true;
          codeLanguage = line.trim().substring(3).trim() || 'code';
          codeContent = [];
          
          // Save current section if it has content
          if (currentSection.type === 'text' && Array.isArray(currentSection.content) && currentSection.content.length > 0) {
            sections.push({
              type: 'text',
              content: currentSection.content.join('\n').trim(),
              heading: currentSection.heading
            });
            currentSection = { type: 'text', content: [] };
          } else if (currentSection.type === 'list' && Array.isArray(currentSection.items) && currentSection.items.length > 0) {
            sections.push(currentSection);
            currentSection = { type: 'text', content: [] };
          }
        } else {
          // End of code block
          inCodeBlock = false;
          sections.push({
            type: 'code',
            language: codeLanguage,
            code: codeContent.join('\n')
          });
          codeContent = [];
        }
        return;
      }

      // If in code block, collect code lines
      if (inCodeBlock) {
        codeContent.push(line);
        return;
      }

      // Check for headers (## Header)
      if (line.trim().startsWith('##')) {
        // Save previous section
        if (currentSection.type === 'text' && Array.isArray(currentSection.content) && currentSection.content.length > 0) {
          sections.push({
            type: 'text',
            content: currentSection.content.join('\n').trim(),
            heading: currentSection.heading
          });
        } else if (currentSection.type === 'list' && Array.isArray(currentSection.items) && currentSection.items.length > 0) {
          sections.push(currentSection);
        }
        
        // Start new section with heading
        currentSection = {
          type: 'text',
          heading: line.trim().substring(2).trim(),
          content: []
        };
        return;
      }

      // Check for numbered lists (1. Item)
      if (line.trim().match(/^\d+\.\s+/)) {
        // If we have text content, save it
        if (currentSection.type === 'text' && Array.isArray(currentSection.content) && currentSection.content.length > 0) {
          sections.push({
            type: 'text',
            content: currentSection.content.join('\n').trim(),
            heading: currentSection.heading
          });
        }
        
        // If not in a list section, create one
        if (currentSection.type !== 'list') {
          currentSection = { type: 'list', items: [] };
        }
        
        // Add list item
        const item = line.trim().replace(/^\d+\.\s+/, '');
        if (!Array.isArray(currentSection.items)) {
          currentSection.items = [];
        }
        currentSection.items.push(item);
        return;
      }

      // Check for bullet lists (- Item or * Item)
      if (line.trim().match(/^[-*]\s+/)) {
        // If we have text content, save it
        if (currentSection.type === 'text' && Array.isArray(currentSection.content) && currentSection.content.length > 0) {
          sections.push({
            type: 'text',
            content: currentSection.content.join('\n').trim(),
            heading: currentSection.heading
          });
        }
        
        // If not in a list section, create one
        if (currentSection.type !== 'list') {
          currentSection = { type: 'list', items: [] };
        }
        
        // Add list item
        const item = line.trim().replace(/^[-*]\s+/, '');
        if (!Array.isArray(currentSection.items)) {
          currentSection.items = [];
        }
        currentSection.items.push(item);
        return;
      }

      // Regular text line
      if (line.trim()) {
        // If we were in a list, save it and start new text section
        if (currentSection.type === 'list') {
          if (Array.isArray(currentSection.items) && currentSection.items.length > 0) {
            sections.push(currentSection);
          }
          currentSection = { type: 'text', content: [] };
        }
        
        // Ensure content array exists
        if (!Array.isArray(currentSection.content)) {
          currentSection.content = [];
        }
        
        currentSection.content.push(line);
      } else if (Array.isArray(currentSection.content) && currentSection.content.length > 0) {
        // Empty line - add to content to preserve spacing
        currentSection.content.push('');
      }
    });

    // Save the last section with safety checks
    if (currentSection.type === 'list' && Array.isArray(currentSection.items) && currentSection.items.length > 0) {
      sections.push(currentSection);
    } else if (currentSection.type === 'text' && Array.isArray(currentSection.content) && currentSection.content.length > 0) {
      sections.push({
        type: 'text',
        content: currentSection.content.join('\n').trim(),
        heading: currentSection.heading
      });
    }

    return sections;
  };

  // Insert images intelligently between content sections
  const insertImagesIntoSections = (sections, images) => {
    if (!images || images.length === 0) return sections;

    const result = [];
    const totalSections = sections.length;
    const imageCount = images.length;

    // Calculate positions to insert images (divide content into roughly equal parts)
    const insertPositions = [];
    if (imageCount === 1) {
      // Insert after ~1/3 of content
      insertPositions.push(Math.floor(totalSections / 3));
    } else if (imageCount === 2) {
      // Insert after ~1/3 and ~2/3 of content
      insertPositions.push(Math.floor(totalSections / 3));
      insertPositions.push(Math.floor((totalSections * 2) / 3));
    } else if (imageCount === 3) {
      // Insert after ~1/4, ~1/2, and ~3/4 of content
      insertPositions.push(Math.floor(totalSections / 4));
      insertPositions.push(Math.floor(totalSections / 2));
      insertPositions.push(Math.floor((totalSections * 3) / 4));
    }

    let imageIndex = 0;
    sections.forEach((section, index) => {
      result.push(section);
      
      // Insert image if this is an insertion point
      if (insertPositions.includes(index + 1) && imageIndex < images.length) {
        result.push({
          type: 'image',
          src: images[imageIndex],
          alt: `Blog image ${imageIndex + 1}`
        });
        imageIndex++;
      }
    });

    return result;
  };

  // Parse content and insert images
  const sections = parseContent(blog.content);
  const contentWithImages = insertImagesIntoSections(sections, blog.images);

  // Format date
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    } catch (error) {
      return dateString; // Return original if parsing fails
    }
  };

  // Render different section types
  const renderSection = (section, index) => {
    if (!section || !section.type) return null;

    switch (section.type) {
      case 'text':
        return (
          <div key={index} className="mb-8">
            {section.heading && (
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {section.heading}
              </h2>
            )}
            <div className="text-gray-700 leading-relaxed text-base md:text-lg whitespace-pre-line">
              {section.content}
            </div>
          </div>
        );

      case 'image':
        return (
          <div key={index} className="mb-8 md:mb-12 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 p-4 md:p-6">
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={section.src} 
                alt={section.alt || 'Blog image'}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        );

      case 'code':
        return (
          <div key={index} className="mb-8">
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
              <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
                <span className="text-xs text-gray-400 uppercase tracking-wide">
                  {section.language || 'code'}
                </span>
                <button
                  onClick={() => {
                    if (navigator.clipboard && section.code) {
                      navigator.clipboard.writeText(section.code);
                    }
                  }}
                  className="text-xs text-gray-400 hover:text-white transition-colors px-2 py-1 rounded hover:bg-gray-700"
                >
                  Copy
                </button>
              </div>
              <div className="p-4 md:p-6 overflow-x-auto">
                <pre className="text-sm md:text-base">
                  <code className="text-gray-100 font-mono leading-relaxed whitespace-pre">
                    {section.code || ''}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        );

      case 'list':
        if (!Array.isArray(section.items) || section.items.length === 0) return null;
        return (
          <div key={index} className="mb-8">
            <ol className="space-y-3 ml-6 list-decimal">
              {section.items.map((item, i) => (
                <li key={i} className="text-gray-700 leading-relaxed text-base md:text-lg pl-2">
                  {item}
                </li>
              ))}
            </ol>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
          >
            <ArrowLeftCircleIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Blog</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Article Header */}
        <header className="mb-8 md:mb-12">
          {/* Date and Read Time */}
          <div className="flex items-center flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500 mb-4">
            <div className="flex items-center">
              <CalendarDateRangeIcon className="w-4 h-4 mr-1.5" />
              <time dateTime={blog.date}>{formatDate(blog.date)}</time>
            </div>
            {blog.readTime && (
              <>
                <span>•</span>
                <div className="flex items-center">
                  <ClockIcon className="w-4 h-4 mr-1.5" />
                  <span>{blog.readTime}</span>
                </div>
              </>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {blog.title || 'Untitled Post'}
          </h1>

          {/* Author */}
          <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-semibold text-lg mr-3">
                {blog.author ? blog.author.charAt(0).toUpperCase() : 'A'}
              </div>
              <div>
                <p className="font-medium text-gray-900">{blog.author || 'Anonymous'}</p>
                <p className="text-sm text-gray-500">Author</p>
              </div>
            </div>
            
            <button className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
              <ShareIcon className="w-4 h-4 mr-2" />
              <span>Share</span>
            </button>
          </div>
        </header>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          {contentWithImages.map((section, index) => renderSection(section, index))}
        </div>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <p className="text-gray-600">
              Thanks for reading! Share this article if you found it helpful.
            </p>
            <button className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium">
              <ShareIcon className="w-4 h-4 mr-2" />
              Share Article
            </button>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogDetailPage;