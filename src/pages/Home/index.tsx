import { Play } from "phosphor-react";
import {
  CountdownButton,
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separettor,
  TaskInput,
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action=''>
        <FormContainer>
          <label htmlFor='task'>Vou trabalhar em</label>
          <TaskInput id='task' />
          <label htmlFor='minutesAmount'>durante</label>
          <MinutesAmountInput id='minutesAmount' type='number' />
          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separettor>:</Separettor>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <CountdownButton type='submit'>
          <Play size={24} />
          Começar
        </CountdownButton>
      </form>
    </HomeContainer>
  );
}
