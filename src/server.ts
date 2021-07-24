import {http} from './http'
import './websocket/client'

const port = 3333;
http.listen(3333,function(){
    console.log(`Server is runnning on port ${port}, click here to open : http://localhost:3333/pages/client`);
});