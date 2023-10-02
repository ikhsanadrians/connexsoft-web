export interface projectType {
   member_name : string,
   member_picture : string,
   quotes : string,
   project_name : string,
   project_description : string,
   project_techstack : string[],
   project_link : projectLink[] ,
}

export type projectLink = {
   url : string,
   github : string,
}


