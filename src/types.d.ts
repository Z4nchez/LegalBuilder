//User Roles
enum UserRole  {
    admin = 0,
    lawyer = 1,
    guest = 2
  }
  //Lawyer types
  type LawyerType = {
    id:number,
    categoryName:string,
    description: string
  }
  //Address 
  interface Address {
    street: string
    city: string
    zipCode: number
  }
  //Contact Information
  interface ContactInfo {
    movil: string
    phone: string
    email: string
  }
  //User Entity
  interface UserEntity {
    id: string
    firstName: string
    lastName: string
    contactInfo: ContactInfo
    address: Address
    userName: string
    password: string
    userRole: UserRole
    lawyerTypes?: LawyerType[]
    birth: Date
  }