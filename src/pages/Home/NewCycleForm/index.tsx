import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";

export {} from "styled-components";

export function NewCycleForm() {
  return (
    <FormContainer>
      <label htmlFor='task'>Vou trabalhar em</label>
      <TaskInput
        id='task'
        list='task-suggestions'
        disabled={!!activeCycle}
        placeholder='Dê um nome para o seu projeto'
        {...register("task")}
      />

      <datalist id='task-suggestions'>
        <option value='Projeto 1' />
        <option value='Projeto 2' />
        <option value='Projeto 3' />
        <option value='Projeto 4' />
        <option value='Projeto 5' />
      </datalist>

      <label htmlFor='minutesAmount'>durante</label>
      <MinutesAmountInput
        id='minutesAmount'
        type='number'
        disabled={!!activeCycle}
        placeholder='00'
        {...register("minutesAmount", { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  );
}
