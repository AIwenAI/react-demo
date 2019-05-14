import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sex: 1, // 1 -> 男  0 -> 女
      sexs: [{ id: 0, name: '女' }, { id: 1, name: '男' }, { id: 2, name: '保密' }],
      loves: [
        { loveId: 100, name: '篮球' },
        { loveId: 101, name: '看电影' },
        { loveId: 102, name: '听歌' },
        { loveId: 103, name: '玩游戏' }
      ],
      checkedLoves: [100, 101],
      curCity: '',
      citys: [
        { cityId: 10, name: '南昌'},
        { cityId: 11, name: '深圳'},
        { cityId: 12, name: '九江'},
        { cityId: 13, name: '上海'},
        { cityId: 14, name: '长沙'},
      ]
    }

    this.chgSex = this.chgSex.bind(this)
    this.chgLove = this.chgLove.bind(this)
    this.chgCity = this.chgCity.bind(this)
    this.chgFile = this.chgFile.bind(this)

  }

  chgSex(e) {
    let value = parseInt(e.target.value)
    this.setState({
      sex: value
    })
  }

  chgLove(e) {
    let value = parseInt(e.target.value),
    index = this.state.checkedLoves.indexOf(value);
    if(index > -1) {
      this.setState((prevState) => {
        let list = prevState.checkedLoves
        list.splice(index, 1);
        return {
          checkedLoves: list
        }
      })
    } else {
      this.setState((prevState) => {
        return {
          checkedLoves: [...prevState.checkedLoves, value]
        }
      })
    }
  }

  chgCity(e) {
    let value = parseInt(e.target.value)
    this.setState({
      curCity: value
    })
  }

  chgFile(e) {
    console.log(this.refs.myFile.files);
  }

  render() {
    const { sex, sexs, loves, checkedLoves, citys, curCity } = this.state
    return (
      <div>
        <p>请选择性别:</p>
        {
          sexs.map(item => {
            return(
              <label key={ item.id }>
                <input
                  type="radio"
                  name="sex"
                  value={ item.id }
                  checked={ sex === item.id }
                  onChange={ this.chgSex } />
                <span>{ item.name }</span>
              </label>
            )
          })
        }

        <p>请选择爱好:</p>
        {
          loves.map(item => {
            return(
              <label key={ item.loveId }>
                <input
                  type="checkbox"
                  value={ item.loveId }
                  checked={ checkedLoves.indexOf(item.loveId) > -1 }
                  onChange={ this.chgLove } />
                <span>{ item.name }</span>
                <br />
              </label>
            )
          })
        }

        <p>请选择所在城市:</p>
        <select value={ curCity } onChange={ this.chgCity }>
          <option value="" disabled>请选择</option>
          {
            citys.map(item => {
              return(
                <option key={ item.cityId } value={ item.cityId } >{ item.name }</option>
              )
            })
          }
        </select>
        <br/>
        <input type="file" ref='myFile' />
        <button onClick={ this.chgFile } >输出</button>

      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
