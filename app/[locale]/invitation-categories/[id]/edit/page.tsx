import EditTemplate from '@/app/ui/invitation-categories/edit-template'

export default async function Page () {
  return (
    <div className='flex flex-col items-center px-5'>
      <div style={{ fontFamily: 'Great Vibes' }}>Greate Vibes</div>
      <div className='font-great_vibes'>Greate Vibes</div>
      <EditTemplate />
    </div>
  )
}
