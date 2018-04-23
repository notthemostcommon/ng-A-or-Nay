export class Review {
    constructor(
        public id: number, 
        public user_id: number, 
        public camis: string, 
        public dba: string, 
        public bldg: string, 
        public street: string, 
        public boro: string, 
        public zip: string, 
        public rating: number, 
        public review: string, 
        public grade: string, 
        public category: string
    ){}
}
