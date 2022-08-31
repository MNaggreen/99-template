import './App.css'
import MyComponent from './components/MyComponent'
import OtherComponent from './components/OtherComponent'

function App() {
  return (
    <div className="App">
      <MyComponent />
      <OtherComponent />
      <MyComponent />
      <OtherComponent />
      <MyComponent />
      <OtherComponent />
      <MyComponent />
    </div>
  )
}
// вставляем нашу функцию (компонент) можно даже несколько раз
export default App
