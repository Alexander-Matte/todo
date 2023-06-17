export function getProjectName() {
    let projectName = document.querySelector("#projectName").value;
    return projectName;
}

export function getSelectedProject() {
    return document.querySelector(".content-header").innerHTML;

}