
import {useSpaceStore} from "../store/useSpaceStore"

const NavbarSettings = () => {

const setColorPointer = useSpaceStore(state => state.setColorPointer)

  return ( 
    <>
   <div className="dropdown">
    <label tabIndex={0} className=" m-0">

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
    </svg>

    </label>
    <ul tabIndex={0} className=" absolute right-2 top-8 dropdown-content menu p-2 shadow bg-base-100 rounded-box w-44">
      
    <div className="flex justify-end space-x-5">
      <label>Cyan</label>
      <input value='bg-cyan-50' onChange={e => setColorPointer('e.target.value')}  type="radio" name="radio-10" className=" mb-2 radio checked:bg-cyan-100" />
    </div>

    <div className="flex justify-end space-x-5">
      <label>Slate</label>
      <input value='bg-slate-50'  onChange={e => setColorPointer(e.target.value)} type="radio" name="radio-10" className=" mb-2 radio checked:bg-slate-100" />
    </div>
    <div className="flex justify-end space-x-5">
      <label>Zinc</label>
      <input value='bg-zinc-50' onChange={e => setColorPointer(e.target.value)} type="radio" name="radio-10" className=" mb-2 radio checked:bg-zinc-100" />
    </div>
    <div className="flex justify-end space-x-5">
      <label>Stone</label>
      <input value='bg-stone-50' onChange={e => setColorPointer(e.target.value)} type="radio" name="radio-10" className=" mb-2 radio checked:bg-stone-100" />
    </div>
    <div className="flex justify-end space-x-5">
      <label>Amber</label>
      <input value='bg-amber-50' onChange={e => setColorPointer(e.target.value)} type="radio" name="radio-10" className=" mb-2 radio checked:bg-amber-100" />
    </div>
    <div className="flex justify-end space-x-5">
      <label>Teal</label>
      <input value=' bg-teal-50' onChange={e => setColorPointer(e.target.value)} type="radio" name="radio-10" className=" mb-2 radio checked:bg-teal-100" />
    </div>
    <div className="flex -50 justify-end space-x-5">
      <label>Sky</label>
      <input value='bg-sky-50' onChange={e => setColorPointer(e.target.value)} type="radio" name="radio-10" className=" mb-2 radio checked:bg-sky-100" />
    </div>
    <div className="flex -50 justify-end space-x-5">
      <label>Pink</label>
      <input value='bg-pink-50' onChange={e => setColorPointer(e.target.value)} type="radio" name="radio-10" className=" mb-2 radio checked:bg-pink-100" />
    </div>
  </ul>
</div>

    </>
  );
}
 
export default NavbarSettings;