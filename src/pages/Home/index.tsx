import { Play } from "phosphor-react";
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  Separettor,
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action=''>
        <FormContainer>
          <label htmlFor='task'>Vou trabalhar em</label>
          <input id='task' />
          <label htmlFor='minutesAmount'>durante</label>
          <input id='minutesAmount' type='number' />
          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separettor>:</Separettor>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <button type='submit'>
          <Play size={24} />
          Começar
        </button>
      </form>
    </HomeContainer>
  );
}
