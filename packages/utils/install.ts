export const componentInstall = (com)=>{
    com.install = (app)=>{
        app.component(com.name,com)
    }
    return com
}