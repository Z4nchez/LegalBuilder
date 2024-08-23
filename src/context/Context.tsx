import { createContext, useState } from 'react';

interface childernType {
  children: React.ReactNode;
}
interface taskInter{
  idT : number,
  titleT : String,
  bodyT : String,
  statusT : number,
  case: string
}
interface noteInter{
  title:string,
  note:string,
  date:string,
  case: string
}
interface caseInter{
  id: number,
  nExp: string,
  category: string,
  state: string
}
interface profileInter{
  user: string,
  pass: string,
  lawyerID: string,
  name : string,
  surename : string,
  category : string,
  nCases : Number,
  active : Boolean,
  address : string,
  email : string,
  phone : string
}
interface sesionInter{
  user: string,
  case: string,
  state: number
}

export type globalContent = {
    menuApp: Number,
    setMenuApp: (m: Number) => void,
    navCase: number,
    setNavCase: (m: number) => void,
    onUser: Boolean,
    setOnUser: (m: Boolean) => void,
    isAdmin: Boolean,
    setIsAdmin: (m: Boolean) => void,
    panelMenu: Number,
    setPanelMenu: (m: Number) => void,
    menuH: Boolean,
    setMenuH: (m: Boolean) => void,
    listTasksC: taskInter[],
    setlistTasksC: (m: taskInter[]) => void,
    listNotesC: noteInter[],
    setlistNotesC: (m: noteInter[]) => void,
    listCasesC: caseInter[],
    setlistCasesC: (m: caseInter[]) => void,
    listSeionsC: sesionInter[],
    setlistSeionsC: (m: sesionInter[]) => void,
    listUsersC: profileInter[],
    setlistUsersC: (m: profileInter[]) => void
}

export const Context = createContext<globalContent>({
    menuApp: 0,
    setMenuApp: () => {},
    navCase: 0,
    setNavCase: () => {},
    onUser: false,
    setOnUser: () => {},
    isAdmin: false,
    setIsAdmin: () => {},
    panelMenu: 0,
    setPanelMenu: () => {},
    menuH: false,
    setMenuH: () => {},
    listTasksC: [],
    setlistTasksC: () => {},
    listNotesC: [],
    setlistNotesC: () => {},
    listCasesC: [],
    setlistCasesC: () => {},
    listSeionsC: [],
    setlistSeionsC: () => {},
    listUsersC: [],
    setlistUsersC: () => {}
});

export function ContextProvider({ children }: childernType) {

  const [menuApp, setMenuApp] = useState<Number>(0);
  const [navCase, setNavCase] = useState<number>(0);
  const [onUser, setOnUser] = useState<Boolean>(false);
  const [isAdmin, setIsAdmin] = useState<Boolean>(true);
  const [panelMenu, setPanelMenu] = useState<Number>(0);
  const [menuH, setMenuH] = useState<Boolean>(false);
  const [listTasksC, setlistTasksC] = useState<taskInter[]>([]);
  const [listNotesC, setlistNotesC] = useState<noteInter[]>([]);
  const [listCasesC, setlistCasesC] = useState<caseInter[]>([]);
  const [listSeionsC, setlistSeionsC] = useState<sesionInter[]>([]);
  const [listUsersC, setlistUsersC] = useState<profileInter[]>([]);

  return <Context.Provider value={{menuApp, setMenuApp, onUser, setOnUser, isAdmin, setIsAdmin, panelMenu, setPanelMenu, menuH, setMenuH, listTasksC, setlistTasksC, listNotesC, setlistNotesC, listCasesC, setlistCasesC, listSeionsC, setlistSeionsC, listUsersC, setlistUsersC, navCase, setNavCase}}>{children}</Context.Provider>;
}

export default Context;
