class apiResponse<T = unknown> {

    public statusCode:number;
    public data:T;
    public message:string;
    public success:boolean 

    constructor(statusCode:number,data: T,
    message: string = "Success"){
        this.statusCode = statusCode,
        this.data=data,
        this.message=message,
        this.success=statusCode<400 ;
    }
}

export {apiResponse}



// class ApiResponse<T = unknown> {
//   public success: boolean;

//   constructor(
//     public statusCode: number,
//     public data: T,
//     public message: string = "Success"
//   ) {
//     this.success = statusCode < 400;
//   }
// }
