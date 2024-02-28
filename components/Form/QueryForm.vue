<template>
  <form class="flex flex-col space-y-10 w-[60%] m-auto">
    <FloatLabel>
      <InputText v-model="name" class="w-full p-3" />
      <label for="name">Имя</label>
    </FloatLabel>
    <FloatLabel>
      <InputText v-model="surname" class="w-full p-3" />
      <label for="surname">Фамилия</label>
    </FloatLabel>
    <FloatLabel>
      <InputText v-model="phone" class="w-full p-3" />
      <label for="phone">Телефонный номер</label>
    </FloatLabel>
    <FloatLabel>
      <Textarea v-model="applicationText" class="w-full h-24" />
      <label for="applicationText">Текст заявки</label>
    </FloatLabel>
    <p-button label="Отправить заявку" class="self-center" @click="submitApplication" />
  </form>
</template>
<script setup>
import { ref } from 'vue'
const name = ref('')
const surname = ref('')
const phone = ref('')
const applicationText = ref('')
const submitApplication = async () => {
  try {
    const spreadsheetId = await createSheet()
    const range = 'Sheet1!A1:D1' // Укажите диапазон, куда будут добавлены данные
    const values = [name.value, surname.value, phone.value, applicationText.value]
    await appendData(spreadsheetId, range, values)
    alert('Данные успешно отправлены!')
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Ошибка при отправке данных:', error)
    alert('Произошла ошибка при отправке данных.')
  }
}
</script>

<style scoped>

</style>
