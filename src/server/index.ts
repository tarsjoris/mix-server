import { Subject } from "rxjs";
import { IOSCMessage } from "./osc";
import { XR18API } from "./XR18API";

const subject = new Subject<IOSCMessage>()

const api = new XR18API(subject, '192.168.0.2', 1)

console.log('Connecting ...')
api.makeConnection()
console.log('Connected')

process.on('SIGINT', () => {
	api.closeConnection()
	console.log('Closed connection')
	process.exit()
})