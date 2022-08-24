import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { evaluate } from "mathjs"
function App() {
  const [value, setValue] = useState('')
  const [expression, setExpression] = useState('0')

  function handleClick({ target }) {
    const newValue = target.textContent

    const setting = (newvalue) => {
      if (/\/|\+|\*|-/.test(expression.slice(-1))) {
        setExpression(prev => prev.slice(0, -1) + newvalue)
      } else if (expression.indexOf(".") == (expression.length - 1)) {
        return null
      } else
        setExpression(prev => prev + newvalue)
      setValue('')

    }

    switch (newValue) {
      case "AC":
        setValue('')
        setExpression("0")
        break;
      case "+":
        setting(newValue)
        break
      case "x":
        setting("*")

        break
      case "-":
        setting(newValue)

        break
      case "/":
        setting(newValue)

        break
      case "=":
        setValue('')
        setExpression(String(evaluate(expression)))
        break
      case ".":
        // eslint-disable-next-line eqeqeq
        // if (value)
        // setExpression(prev => prev + ".")
        setValue(prev => prev.indexOf(".") !== -1 ? prev : prev + ".")
        if (value.indexOf(".") == -1) {

          setExpression(prev => prev + ".")
        }

        break
      default:
        if (/\d/.test(newValue) && !(+expression) || expression == value) {

          setValue(prev => prev + newValue)
          setExpression(prev => prev !== "0" ? prev + newValue : newValue)
        }
    }

  }
  return (
    <Paper elevation={8} sx={{
      padding: 1.25,
      borderRadius: 2,
      background: "#d3e6f94a "
    }}>
      <Box textAlign="right" sx={{
        background: "#fff",
        mb: 2,
        fontSize: 25,
        fontFamily: "consolas"
      }}>
        <p style={{ opacity: .4, marginBottom: 12, wordWrap: "break-word", width: 300 }} >{expression}</p>
        <p style={{ wordWrap: "break-word", width: 300 }}>{value || '0'}</p>
      </Box>

      <Box sx={{
        width: 300,
        height: 375,
        gap: .75,
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(5, 1fr)",

      }}>

        <Paper elevation={4} sx={{ gridArea: "1 / 1 / 2 / 3" }}><Button onClick={handleClick} sx={{ fontSize: 20, width: "100%", height: "100%" }}>AC</Button></Paper>
        <Paper elevation={4} sx={{ gridArea: "1 / 3 / 2 / 4" }}><Button onClick={handleClick} sx={{ fontSize: 20, width: "100%", height: "100%" }}>/</Button></Paper>
        <Paper elevation={4} sx={{ gridArea: "1 / 4 / 2 / 5" }}><Button onClick={handleClick} sx={{ fontSize: 20, width: "100%", height: "100%" }}>x</Button></Paper>
        <Paper elevation={4} sx={{ gridArea: "2 / 1 / 3 / 2" }}><Button onClick={handleClick} sx={{ fontSize: 20, width: "100%", height: "100%" }}>7</Button></Paper>
        <Paper elevation={4} sx={{ gridArea: "2 / 2 / 3 / 3" }}><Button onClick={handleClick} sx={{ fontSize: 20, width: "100%", height: "100%" }}>8</Button></Paper>
        <Paper elevation={4} sx={{ gridArea: "2 / 3 / 3 / 4" }}><Button onClick={handleClick} sx={{ fontSize: 20, width: "100%", height: "100%" }}>9</Button></Paper>
        <Paper elevation={4} sx={{ gridArea: "2 / 4 / 3 / 5" }}><Button onClick={handleClick} sx={{ fontSize: 20, width: "100%", height: "100%" }}>-</Button></Paper>
        <Paper elevation={4} sx={{ gridArea: "3 / 1 / 4 / 2" }}><Button onClick={handleClick} sx={{ fontSize: 20, width: "100%", height: "100%" }}>4</Button></Paper>
        <Paper elevation={4} sx={{ gridArea: "3 / 2 / 4 / 3" }}><Button onClick={handleClick} sx={{ fontSize: 20, width: "100%", height: "100%" }}>5</Button></Paper>
        <Paper elevation={4} sx={{ gridArea: "3 / 3 / 4 / 4" }}><Button onClick={handleClick} sx={{ fontSize: 20, width: "100%", height: "100%" }}>6</Button></Paper>
        <Paper elevation={4} sx={{ gridArea: "3 / 4 / 4 / 5" }}><Button onClick={handleClick} sx={{ fontSize: 20, width: "100%", height: "100%" }}>+</Button></Paper>
        <Paper elevation={4} sx={{ gridArea: "4 / 1 / 5 / 2" }}><Button onClick={handleClick} sx={{ fontSize: 20, width: "100%", height: "100%" }}>1</Button></Paper>
        <Paper elevation={4} sx={{ gridArea: "4 / 2 / 5 / 3" }}><Button onClick={handleClick} sx={{ fontSize: 20, width: "100%", height: "100%" }}>2</Button></Paper>
        <Paper elevation={4} sx={{ gridArea: "4 / 3 / 5 / 4" }}><Button onClick={handleClick} sx={{ fontSize: 20, width: "100%", height: "100%" }}>3</Button></Paper>
        <Paper elevation={4} sx={{ gridArea: "5 / 1 / 6 / 3" }}><Button onClick={handleClick} sx={{ fontSize: 20, width: "100%", height: "100%" }}>0</Button></Paper>
        <Paper elevation={4} sx={{ gridArea: "5 / 3 / 6 / 4" }}><Button onClick={handleClick} sx={{ fontSize: 20, width: "100%", height: "100%" }}>.</Button></Paper>
        <Paper elevation={4} sx={{ gridArea: "4 / 4 / 6 / 5" }}><Button onClick={handleClick} sx={{ fontSize: 20, width: "100%", height: "100%" }}>=</Button></Paper>
      </Box>
    </Paper>
  );
}

export default App
