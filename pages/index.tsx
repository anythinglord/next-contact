import React, { useState } from "react";
import Card from '@/components/Card'
import Modal from "@/components/Modal";
import { People } from '@/data/people';
import { useDispatch } from "react-redux";
import { addPeople } from "@/redux/states/people";

export default function Home() {

  const [isOpen, handleClose] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [Number, setNumber] = useState<string>('');
  const [Age, setAge] = useState<number>(25);
  const dispatch = useDispatch();
  const [contacts, setContacts] = useState(People);

  const saveData = (): void => {
    const newContacts = [...contacts];
    const newId = newContacts.length + 1;
    newContacts.push({
      id: newId,
      name: name,
      phone: Number,
      category: 'manager',
      company: 'McDonalds',
      age: Age
    })
    dispatch(addPeople({
      id: newId,
      name: name,
      phone: Number,
      category: 'manager',
      company: 'McDonalds',
      age: Age
    }));
    setContacts(newContacts);
    handleClose(!isOpen)
  };

  const inputChange = (event: any) => {
    const id = event.target.id;
    var value = event.target.value;
    console.log()
    if (id === 'input-name') setName(value)
    else setNumber(value)
  }

  return (
    <main
      className={`flex min-h-screen grid grid-rows-4 grid-cols-4 gap-4 p-12`}
    >
      <div>
        <button
          onClick={() => handleClose(!isOpen)}
          className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
          create new
        </button>
      </div>
      <div className="cursor-pointer p-5 bg-white shadow rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </div>
      {contacts.map(({ id, name, phone, age }) =>
        <Card key={id} id={id} title={name} phone={phone} age={age}/>
      )}
      
      <Card id={0} title='This is a new card' phone='this is a new content' age={25}/>
      {isOpen && <Modal isOpen={isOpen} handleClose={() => handleClose(!isOpen)} inputChange={inputChange} saveData={saveData}/>}
    </main>
  )
}
