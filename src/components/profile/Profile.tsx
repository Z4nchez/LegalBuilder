import { Button } from '../../app/globalComponents/Button';
import { ItemIcon } from '../../app/globalComponents/ItemIcon';
import React, {useContext} from 'react'
import Context from '../../context/Context'

interface profileInter{
  name : string,
  surename : string,
  category : string,
  nCases : Number,
  active : Boolean,
  address : string,
  email : string,
  phone : string
}
interface prInter extends React.HTMLAttributes<HTMLDivElement>{
    pr : profileInter
  }

function Profile(props:prInter) {

  const {isAdmin} = useContext(Context)
  return (
    <div className="text-grey w-full h-full flex flex-col justify-between items-center">
        <div className="w-full h-[30%] flex justify-between items-end gap-10">
          <div className="flex w-full h-full gap-5">
            <div className="h-full w-auto aspect-square flex items-center justify-center border-lightPurple border-2 bg-lightPurple border-solid rounded-md">
              <ItemIcon style={{ width: '70%', height: '70%' }} src="user.svg"></ItemIcon>
            </div>
            <div className="flex flex-col items-start justify-evenly">
              <p>{`${props.pr.name} ${props.pr.surename}`}</p>
              <p>{props.pr.category}</p>
              <p>{`${props.pr.nCases} cases`}</p>
              <p className="text-green-800">{props.pr.active === true ? "Active" : "Inactive"}</p>
            </div>
          </div>
          {isAdmin === true && <div className="flex justify-end w-auto h-auto gap-6">
            <Button>Update</Button>
            <Button>Delete</Button>
          </div>}
        </div>
        <div className="w-full h-[65%] px-8 flex flex-col items-end justify-start border-lightPurple  bg-lightPurple border-solid border-2 rounded-md">
          <p className="text-grey border-b-2 border-lightPurple w-full text-end py-2">
            Contact
          </p>
          <div className="flex mr-6 mt-8 items-center gap-4">
            <p className="text-grey">{props.pr.address}</p>
            <ItemIcon style={{ width: '28px' }} src="pin.svg"></ItemIcon>
          </div>
          <div className="flex mr-6 mt-4 items-center gap-4">
            <p className="text-grey">{props.pr.email}</p>
            <ItemIcon style={{ width: '28px' }} src="gm.svg"></ItemIcon>
          </div>
          <div className="flex mr-6 mt-4 items-center gap-4">
            <p className="text-grey">{props.pr.phone}</p>
            <ItemIcon style={{ width: '28px' }} src="phone.svg"></ItemIcon>
          </div>
        </div>
      </div>
  )
}

export default Profile