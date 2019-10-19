import { getJwt } from './getJwt';

const authenticate = () => {

    try {

        const JWT = getJwt();

        if(JWT === null) {
            return false; // not authenticated
        }

        return true; //authenticated
        
    } catch (error) {
        
        console.log(error);
        return false; //not authenticated as some error occured
        
    }

}

export {
    authenticate
}