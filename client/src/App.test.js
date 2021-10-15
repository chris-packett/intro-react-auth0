import rewire from "rewire"
import React from "react"
import ReactDOM from "react-dom"
const App = rewire("./App")
const handleAuthentication = App.__get__("handleAuthentication")
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// @ponicode
describe("handleAuthentication", () => {
    test("0", () => {
        let callFunction = () => {
            handleAuthentication({ location: { hash: "accessdenied4u" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            handleAuthentication({ location: { hash: "!Lov3MyPianoPony" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            handleAuthentication({ location: { hash: "$p3onyycat" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            handleAuthentication({ location: { hash: "YouarenotAllowed2Use" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            handleAuthentication({ location: { hash: "NoWiFi4you" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            handleAuthentication({ location: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})
