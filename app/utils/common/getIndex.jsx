export default function getIndex(projects, projectID){

  const data = projects.filter(p=>p.id === projectID);
  const dataIndex = projects.findIndex(p => p.id === projectID)
  const nextIndex = dataIndex + 1;
  const previousIndex= dataIndex -1;

  return {data, nextIndex, previousIndex}

} 