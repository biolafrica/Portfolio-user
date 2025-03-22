export default function formatDate(dateStamp){
  return new Date(dateStamp).toLocaleString("default", {day: "numeric",month: 'long', year:"numeric"});
}