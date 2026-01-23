class apiResponse<T = unknown> {
    public success:boolean
    constructor(public statusCode:number , public data:T,public message:string = "sucess"){
        this.success = statusCode < 400 
    }
}