import { EventCard } from '@/components/event-card'
import { Title } from '@/components/title'
import { EventModel } from '@/models'

export async function getEvents(): Promise<EventModel[]> {
  const response = await fetch(`${process.env.GOLANG_API_URL}/events`, {
    headers: {
      apikey: process.env.GOLANG_API_TOKEN as string,
    },
    cache: 'no-store',
  })

  return (await response.json()).events
}

export default async function Home() {
  const events = await getEvents()
  return (
    <main className="mt-10 flex flex-col">
      <Title>Eventos disponíveis</Title>
      <div className="mt-8 sm:grid sm:grid-cols-auto-fit-cards flex flex-wrap justify-center gap-x-2 gap-y-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </main>
  )
}
