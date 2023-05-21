import React, { createContext, useContext, useState} from "react";
import { api } from "./api";

interface Restriction {
  restriction: string;
  category: string;
}

export interface Adress{
  cep:string;
  uf: string;
  city: string;
  street:string;
  number:string;
  complement:string;
  latitude:string;
  longitude:string;
}

export interface Pessoa{
  
  name:string
  email:string;
  password:string;
  birthday:string;
  phone:string;
  uf:string;
  city:string;
  restrictions:Restriction[];
  profileImage: string;
}

export interface Restaurante{ 
  cnpj:string;
  corporateName:string
  email:string;
  password:string;
  responsibleName:string;
  responsiblePhone:string;
  comercialPhone:string;
  profileImage: string;
  productImages: string[];
  description:string;
  adress:Adress;
  restrictions:Restriction[];
}

interface UserContextProps {
  pessoa: Pessoa;
  restaurante: Restaurante;
  setPessoa: React.Dispatch<React.SetStateAction<Pessoa>>;
  setRestaurante: React.Dispatch<React.SetStateAction<Restaurante>>;
  createPessoa: (transaction: Pessoa) => Promise<number>;
  createRestaurant: (transaction: Restaurante) => Promise<number>;
}

interface Props {
  children: React.ReactNode;
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps);

export function UserProvider({children}:Props){

  const [pessoa,setPessoa] = useState<Pessoa>({
    name: "",
    email:"",
    password:"",
    birthday:"",
    phone:"", 
    uf:"",
    city:"",
    restrictions:[],
    profileImage: "",
  })

  const [restaurante,setRestaurante] = useState<Restaurante>({
    cnpj:"",
    corporateName: "",
    email:"",
    password:"",
    responsibleName:"",
    responsiblePhone:"", 
    comercialPhone:"",
    profileImage: "",
    productImages:[],
    description:"",
    restrictions:[],
    adress: {
      cep:"",
      city:"",
      uf:"",
      street:"",
      number:"",
      complement:"",
      latitude:"",
      longitude:"",
    },
  })

  async function createPessoa(userInput: Pessoa): Promise<number> {
    let responseCode: any;
    await api
      .post("/users", userInput)
      .then((response) => {
        setPessoa(response.data);
        responseCode = response.status;
      })   
    return responseCode;
  }

  async function createRestaurant(userInput: Restaurante): Promise<number> {
    let responseCode: any;
    await api
      .post("/restaurants", userInput)
      .then((response) => {
        setRestaurante(response.data);
        responseCode = response.status;
      })
     
      
    return responseCode;
  }
  
  return(
    <UserContext.Provider value={{pessoa,setPessoa,restaurante, setRestaurante, createPessoa,createRestaurant}}>
    {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext);

  return context;
}
