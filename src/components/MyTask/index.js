import {Component} from 'react'

import {v4} from 'uuid'

import {
  // MainContainer,
  // CreateTask,
  // CreateForm,
  // FormHeading,
  // InputDiv,
  // Label,
  // Input,
  // Select,
  // Option,
  // FormButton,
  // AddTask,
  // MainHeading,
  // TagListUl,
  // TagList,
  TagButton,
  // TaskUl,
  // TaskLi,
  // TaskText,
  // TaskTag,
  // NoTask,
} from './styledComponents'

import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTask extends Component {
  state = {
    textInput: '',
    taskList: [],
    selectTag: tagsList[0].optionId,
    activeTag: '',
  }

  onChangeInput = event => {
    this.setState({textInput: event.target.value})
  }

  onChangeOption = event => {
    this.setState({selectTag: event.target.value})
  }

  onClickTag = event => {
    this.setState(prev => ({
      activeTag:
        prev.activeTag === event.target.value ? '' : event.target.value,
    }))
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {textInput, selectTag} = this.state
    const newTask = {
      id: v4(),
      input: textInput,
      activeTagName: selectTag,
    }
    if (textInput.length !== 0) {
      this.setState(prev => ({
        taskList: [...prev.taskList, newTask],
        textInput: '',
        selectTag: tagsList[0].optionId,
      }))
    }
  }

  renderCreateTask = () => {
    const {textInput, selectTag} = this.state

    return (
      <div className='createTask'>
        <form className='createForm' onSubmit={this.onSubmitForm}>
          <h1 className='formHeading'>Create a task!</h1>
          <div className='inputDiv'>
            <label className='label-text' htmlFor='task'>
              Task
            </label>
            <input
              className='input-text'
              id='task'
              type='text'
              value={textInput}
              placeholder='Enter the task here'
              onChange={this.onChangeInput}
            />
          </div>
          <div className='inputDiv'>
            <label className='label-text' htmlFor='select'>
              Tags
            </label>
            <select
              className='select-text'
              id='select'
              value={selectTag}
              onChange={this.onChangeOption}
            >
              {tagsList.map(each => (
                <option
                  className='option-text'
                  value={each.optionId}
                  key={each.optionId}
                >
                  {each.displayText}
                </option>
              ))}
            </select>
          </div>
          <button className='formButton' type='submit'>
            Add Task
          </button>
        </form>
      </div>
    )
  }

  renderTaskCard = () => {
    const {taskList, activeTag} = this.state
    const filterList =
      activeTag === ''
        ? taskList
        : taskList.filter(each => each.activeTagName === activeTag)

    return (
      <>
        {filterList.map(each => (
          <li className='taskLi' key={each.id}>
            <p className='taskText'>{each.input}</p>
            <p className='taskTag'>{each.activeTagName}</p>
          </li>
        ))}
      </>
    )
  }

  renderAddTask = () => {
    const {taskList, activeTag} = this.state

    return (
      <div className='addTask'>
        <h1 className='mainHeading'>Tags</h1>
        <ul className='tagListUl'>
          {tagsList.map(each => {
            const isActive = activeTag === each.optionId
            return (
              <li className='tagList' key={each.optionId}>
                <TagButton
                  className='tagButton'
                  type='button'
                  onClick={this.onClickTag}
                  value={each.optionId}
                  isActive={isActive}
                >
                  {each.displayText}
                </TagButton>
              </li>
            )
          })}
        </ul>
        <h1 className='mainHeading'>Tasks</h1>
        <ul className='taskUl'>
          {taskList.length > 0 ? (
            this.renderTaskCard()
          ) : (
            <p className='noTask'>No Tasks Added Yet</p>
          )}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className='mainContainer'>
        {this.renderCreateTask()}
        {this.renderAddTask()}
      </div>
    )
  }
}
export default MyTask

// const tagsList = [
//   {
//     optionId: 'HEALTH',
//     displayText: 'Health',
//   },
//   {
//     optionId: 'EDUCATION',
//     displayText: 'Education',
//   },
//   {
//     optionId: 'ENTERTAINMENT',
//     displayText: 'Entertainment',
//   },
//   {
//     optionId: 'SPORTS',
//     displayText: 'Sports',
//   },
//   {
//     optionId: 'TRAVEL',
//     displayText: 'Travel',
//   },
//   {
//     optionId: 'OTHERS',
//     displayText: 'Others',
//   },
// ]

// class MyTask extends Component {
//   state = {
//     textInput: '',
//     taskList: [],
//     selectTag: tagsList[0].optionId,
//     activeTag: '',
//   }

//   onChangeInput = event => {
//     this.setState({textInput: event.target.value})
//   }

//   onChangeOption = event => {
//     this.setState({selectTag: event.target.value})
//   }

//   onClickTag = event => {
//     this.setState(prev => ({
//       activeTag:
//         prev.activeTag === event.target.value ? '' : event.target.value,
//     }))
//   }

//   onSubmitForm = event => {
//     event.preventDefault()
//     const {textInput, selectTag} = this.state
//     const newTask = {
//       id: v4(),
//       input: textInput,
//       activeTagName: selectTag,
//     }
//     if (textInput.length !== 0) {
//       this.setState(prev => ({
//         taskList: [...prev.taskList, newTask],
//         textInput: '',
//         selectTag: tagsList[0].optionId,
//       }))
//     }
//   }

//   renderCreateTask = () => {
//     const {textInput, selectTag} = this.state

//     return (
//       <dreateTask>
//         <CreateForm onSubmit={this.onSubmitForm}>
//           <FormHeading>Create a task!</FormHeading>
//           <InputDiv>
//             <Label htmlFor="task">Task</Label>
//             <Input
//               id="task"
//               type="text"
//               value={textInput}
//               placeholder="Enter the task here"
//               onChange={this.onChangeInput}
//             />
//           </InputDiv>
//           <InputDiv>
//             <Label htmlFor="select">Tags</Label>
//             <Select
//               id="select"
//               value={selectTag}
//               onChange={this.onChangeOption}
//             >
//               {tagsList.map(each => (
//                 <Option value={each.optionId} key={each.optionId}>
//                   {each.displayText}
//                 </Option>
//               ))}
//             </Select>
//           </InputDiv>
//           <FormButton type="submit">Add Task</FormButton>
//         </CreateForm>
//       </CreateTask>
//     )
//   }

//   renderTaskCard = () => {
//     const {taskList, activeTag} = this.state
//     const filterList =
//       activeTag === ''
//         ? taskList
//         : taskList.filter(each => each.activeTagName === activeTag)

//     return (
//       <>
//         {filterList.map(each => (
//           <TaskLi key={each.id}>
//             <TaskText>{each.input}</TaskText>
//             <TaskTag>{each.activeTagName}</TaskTag>
//           </TaskLi>
//         ))}
//       </>
//     )
//   }

//   renderAddTask = () => {
//     const {taskList, activeTag} = this.state

//     return (
//       <AddTask>
//         <MainHeading>Tags</MainHeading>
//         <TagListUl>
//           {tagsList.map(each => {
//             const isActive = activeTag === each.optionId
//             return (
//               <TagList key={each.optionId}>
//                 <TagButton
//                   type="button"
//                   onClick={this.onClickTag}
//                   value={each.optionId}
//                   isActive={isActive}
//                 >
//                   {each.displayText}
//                 </TagButton>
//               </TagList>
//             )
//           })}
//         </TagListUl>
//         <MainHeading>Tasks</MainHeading>
//         <TaskUl>
//           {taskList.length > 0 ? (
//             this.renderTaskCard()
//           ) : (
//             <NoTask>No Tasks Added Yet</NoTask>
//           )}
//         </TaskUl>
//       </AddTask>
//     )
//   }

//   render() {
//     return (
//       <MainContainer>
//         {this.renderCreateTask()}
//         {this.renderAddTask()}
//       </MainContainer>
//     )
//   }
// }
