import { useReducer } from 'react'

function reducer(state: string, action: string) {
  if (action === 'clear') return '0'
  if (action === '0' && state === '0') return '0'
  if (state === '0') return action
  if (action === '×' && state.endsWith('×')) return state
  if (action === '÷' && state.endsWith('÷')) return state
  return `${state}${action}`
}

export default function TaskC() {
  const [state, dispatch] = useReducer(reducer, '0')

  const handleButtonClick = (val: string) => () => {
    dispatch(val)
  }
  return (
    <div className='h-full w-full flex justify-center items-center bg-neutral-50'>
      <div className='relative flex flex-col h-[640px] w-[460px] rounded-3xl border border-black bg-[#565159] drop-shadow-2xl overflow-hidden'>
        <div className='grid grid-rows-[1fr_3fr] gap-2 py-3 px-4'>
          <div className='flex flex-row gap-3'>
            <button className='h-6 w-6 rounded-full bg-[#fe5f57]' />
            <button className='h-6 w-6 rounded-full bg-[#febb2e]' />
            <button className='h-6 w-6 rounded-full bg-[#2bc840]' />
          </div>
          <p className='text-right text-white text-8xl font-thin'>{state}</p>
        </div>
        <div className='grid grid-rows-5 gap-[2px] flex-grow'>
          <div className='grid grid-cols-4 gap-[2px]'>
            <button
              className='calc-cell bg-cell-header'
              onClick={handleButtonClick('clear')}>
              {'C'}
            </button>
            <button
              className='calc-cell bg-cell-header'
              onClick={handleButtonClick('+/-')}>
              {'+/-'}
            </button>
            <button
              className='calc-cell bg-cell-header'
              onClick={handleButtonClick('%')}>
              {'%'}
            </button>
            <button
              className='calc-cell bg-cell-action'
              onClick={handleButtonClick('÷')}>
              {'÷'}
            </button>
          </div>
          <div className='grid grid-cols-4 gap-[2px]'>
            <button
              className='calc-cell bg-cell'
              onClick={handleButtonClick('7')}>
              {'7'}
            </button>
            <button
              className='calc-cell bg-cell'
              onClick={handleButtonClick('8')}>
              {'8'}
            </button>
            <button
              className='calc-cell bg-cell'
              onClick={handleButtonClick('9')}>
              {'9'}
            </button>
            <button
              className='calc-cell bg-cell-action'
              onClick={handleButtonClick('×')}>
              {'×'}
            </button>
          </div>
          <div className='grid grid-cols-4 gap-[2px]'>
            <button
              className='calc-cell bg-cell'
              onClick={handleButtonClick('4')}>
              {'4'}
            </button>
            <button
              className='calc-cell bg-cell'
              onClick={handleButtonClick('5')}>
              {'5'}
            </button>
            <button
              className='calc-cell bg-cell'
              onClick={handleButtonClick('6')}>
              {'6'}
            </button>
            <button
              className='calc-cell bg-cell-action'
              onClick={handleButtonClick('-')}>
              {'-'}
            </button>
          </div>
          <div className='grid grid-cols-4 gap-[2px]'>
            <button
              className='calc-cell bg-cell'
              onClick={handleButtonClick('1')}>
              {'1'}
            </button>
            <button
              className='calc-cell bg-cell'
              onClick={handleButtonClick('2')}>
              {'2'}
            </button>
            <button
              className='calc-cell bg-cell'
              onClick={handleButtonClick('3')}>
              {'3'}
            </button>
            <button
              className='calc-cell bg-cell-action'
              onClick={handleButtonClick('+')}>
              {'+'}
            </button>
          </div>
          <div className='grid grid-cols-[2fr_1fr_1fr] gap-[2px]'>
            <button
              className='calc-cell bg-cell'
              onClick={handleButtonClick('0')}>
              {'0'}
            </button>
            <button
              className='calc-cell bg-cell'
              onClick={handleButtonClick('.')}>
              {'.'}
            </button>
            <button
              className='calc-cell bg-cell-action'
              onClick={handleButtonClick('=')}>
              {'='}
            </button>
          </div>
        </div>
        <div className='rounded-3xl w-full h-full top-0 left-0 absolute pointer-events-none shadow-[inset_0px_0px_3px_0px_rgb(255,255,255)]' />
      </div>
    </div>
  )
}
