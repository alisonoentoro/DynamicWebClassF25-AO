import React from 'react'
import Accordion from '../component/Accordion'

const items = [
     {
    id: '1',
    label: 'Komodo Dragon',
    content:
      'The world\'s largest living lizard, found on Komodo, Rinca, and Flores islands. A top predator that can grow over 3 meters long.'
  },
  {
    id: '2',
    label: 'Sumatran Tiger',
    content:
      'The smallest surviving tiger subspecies, native to Sumatra\'s dense forests. Critically endangered due to habitat loss and poaching.'
  },
  {
    id: '3',
    label: 'Orangutan',
    content:
      'Great apes native to Borneo and Sumatra. Known for their intelligence and reddish-brown hair; they spend most of their lives in trees.'
  },
  {
    id: '4',
    label: 'Bali Starling',
    content:
      'A striking white songbird with vivid blue eye markings. Endemic to Bali and one of the rarest birds in the world.'
  },
  {
    id: '5',
    label: 'Anoa',
    content:
      'A dwarf water buffalo from Sulawesi\'s forests. Shy and solitary, it resembles a small domestic buffalo with short, sharp horns.'
  },
  {
    id: '6',
    label: 'Maleo',
    content:
      'A unique ground bird from Sulawesi. It buries its eggs in hot sand or geothermal soil so natural heat incubates them.'
  },
  {
    id: '7',
    label: 'Babirusa',
    content:
      'Also called the "deer-pig", this wild pig from Sulawesi is famous for its long, upward-curving tusks that can even pierce its own skin.'
  },
  {
    id: '8',
    label: 'Raja Ampat Epaulette Shark',
    content:
      'A small "walking" shark that uses its fins to move across reefs at low tide. Found around West Papua\'s Raja Ampat islands.'
  },
  {
    id: '9',
    label: 'Timor Python',
    content:
      'One of the world\'s largest snakes, living in eastern Indonesian islands. Nonvenomous and known for its strong constricting power.'
  },
  {
    id: '10',
    label: 'Wallacea Cuscus',
    content:
      'A nocturnal marsupial related to possums, found in Maluku and nearby islands. Slow-moving and mainly feeds on leaves and fruit.'
  }
]

const AccordionPage = () => {
  return (
    <div>
      <h1>Animal Fun Facts</h1>
      <Accordion items={items} />
    </div>
  )
}

export default AccordionPage