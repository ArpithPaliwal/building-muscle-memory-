class apiError extends Error {
    public statusCode:number;
    public sucess:boolean;
    public errors:unknown[];
    public data:null;

    constructor(statusCode:number,)
}