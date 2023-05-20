import { useState } from "react";
import { useRoute } from "@react-navigation/native";

import React from "react";
import { StepParams } from "../@types/navigation";
import { Pessoa, useUser, Restaurante, Adress } from "../helpers/UserContext";
import { UserFirstStep } from "../pages/signUp/pessoa/UserFirstStep";
import { UserSecondStep } from "../pages/signUp/pessoa/UserSecondStep";
import { UserThirdStep } from "../pages/signUp/pessoa/UserThirdStep";
import { RestaurantFirstStep } from "../pages/signUp/restaurante/RestaurantFirstStep";
import { RestaurantFourthStep } from "../pages/signUp/restaurante/RestaurantFourthStep";
import { RestaurantSecondStep } from "../pages/signUp/restaurante/RestaurantSecondStep";
import { RestaurantThirdStep } from "../pages/signUp/restaurante/RestaurantThirdStep";

export function SignUp(){
  const router = useRoute();
  const {step} = router.params as StepParams;
  const [etapa,setEtapa] = useState(step)
  const [pessoa,setPessoa] = useState<Pessoa>(useUser().pessoa);
  const [restaurante,setRestaurante] = useState<Restaurante>(useUser().restaurante);
  const [endereco] =  useState<Adress>(useUser().restaurante.adress);

  return(
      (etapa === 1) ?
        <UserFirstStep setStep={setEtapa} pessoa={pessoa} setPessoa={setPessoa} />
        : (etapa === 2) ?
          <UserSecondStep setStep={setEtapa} pessoa={pessoa} setPessoa={setPessoa} />
          : (etapa === 3) ?
            <UserThirdStep  pessoa={pessoa} />
            : (etapa === 4) ?
              <RestaurantFirstStep setStep={setEtapa} restaurante={restaurante} setRestaurante={setRestaurante} />
              : (etapa === 5) ?
                <RestaurantSecondStep setStep={setEtapa} restaurante={restaurante} setRestaurante={setRestaurante} />
                : (etapa === 6) ?
                  <RestaurantThirdStep setStep={setEtapa} restaurante={restaurante} setRestaurante={setRestaurante} />
                  : (etapa === 7) ?
                    <RestaurantFourthStep adress={endereco}  restaurante={restaurante}/> : <></>
  );
}