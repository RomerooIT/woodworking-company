import {$authHost, $host} from "./index";

// export const ShowWorkers = async (id, name, surname, age, salary, category, currentState) => 
// {
// const {data} = await $host.get('api/worker', {params : {
//     id, name, surname, age, salary, category, currentState
// }})
// return data
// }

export const ShowUser = async (id, email, name,
     surname, role) => 
{
const {data} = await $host.get('api/users/1', {params : {
    id, email, name, surname, role
}})
return data
}