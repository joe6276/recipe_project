
export class Recipe{
    public recipename:string='';
    public description:string=''
    public imagePath:string=''

    constructor(name:string, desc:string,image:string){
        this.recipename=name;
        this.description=desc;
        this.imagePath=image;
    }
}