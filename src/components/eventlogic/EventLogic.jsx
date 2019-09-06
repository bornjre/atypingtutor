import React from 'react';

export const NONE = 0;
export const UP = 1
export const DOWN = 2

export const STOPPED = 0;
export const RUNNING = 1;
export const FINISHED = 2;

const Sentence = "a quick brown dog jumps over the lazy fox.";

const Sample = () => { return {
  sentence:{
    state:STOPPED,
    index:0,
    doneSentence:"",
    nextChar:"",
    otherSentence:Sentence,
  },
  metrics:{
    WPM:0,
    CPM:0,
    Accuracy:0,
  },
  rawmetrics:{

    WordsTyped:0,
    TotalChar:0,
    CorrectChar:0,
  },
  key:{
    codechar:"",
    type:NONE,
  } 
}}

export const EventLogicContext = React.createContext(Sample());
export const ControlContext = React.createContext({
  start: () => {},
  stop: () => {}
});

export default class EventLogic extends React.Component {
  constructor(props){
      super(props);
      this.state = Sample();
      this.timer = null;
      this.startTime = null;
      this.start = this.start.bind(this);
      this.stop = this.stop.bind(this);
      this.onKeyDown = this.onKeyDown.bind(this);
      this.onKeyUp = this.onKeyUp.bind(this);
      this.calculateMetrices = this.calculateMetrices.bind(this);
  }
  componentDidMount() {
      document.addEventListener("keydown", this.onKeyDown);
      document.addEventListener("keyup", this.onKeyUp);
  }
  
  componentWillUnmount() {
      document.removeEventListener("keydown", this.onKeyDown);
      document.removeEventListener("keyup", this.onKeyUp);
  }
  start(){
    console.log("start called")
    if(this.state.sentence.state != RUNNING) {
      this.setState({
        sentence:{
          state:RUNNING,
          index:0,
          doneSentence:"",
          nextChar:"",
          otherSentence:Sentence,
        },
        metrics:{
          WPM:0.01,
          CPM:0.01,
          Accuracy:0.01,
        },
        rawmetrics:{
      
          WordsTyped:0,
          TotalChar:0,
          CorrectChar:0,
        },
        key:{
          codechar:"",
          type:NONE,
        }}
      )
    }
    if(this.timer != null) {
      clearInterval(this.timer);
    }
    this.timer = setInterval( this.calculateMetrices, 1000)
    this.startTime = new Date().getTime();
  }
  stop(){
      this.setState(Sample());
      console.log("stop called")
      if(this.timer != null) {
        clearInterval(this.timer);
      }
  }
  calculateIndexs(index){
    const finishedpart = Sentence.substring(0, index);
    const notfinished = Sentence.substring(index+1, Sentence.length);
    const currstr = Sentence.charAt(index);
    return [finishedpart, notfinished, currstr]
  }
  calculateMetrices(){
    const now = new Date().getTime();
    
    const dist = now - this.startTime;
    const wpm = (this.state.rawmetrics.WordsTyped== 0 ) ? 0: (this.state.rawmetrics.WordsTyped /dist) *6000; // 1000 * 60
    const cpm = this.state.rawmetrics.CorrectChar== 0 ? 0 : (this.state.rawmetrics.CorrectChar/dist) *6000;
    const accuracy = (this.state.rawmetrics.CorrectChar==0 || this.state.rawmetrics.TotalChar ==0) ? 0 : (this.state.rawmetrics.CorrectChar *100)/this.state.rawmetrics.TotalChar;
    console.log("wpm:",wpm, "cpm:", cpm, "accuracy:",accuracy);
    
    console.log("##", this.state.rawmetrics.CorrectChar, "##", this.state.rawmetrics.TotalChar)

  this.setState({
    metrics:{
      WPM:wpm,
      CPM:cpm,
      Accuracy:accuracy,
    }
})
}

  onKeyDown(event){
    
    console.log("keydown:",event);
    if(this.state.sentence.state != RUNNING) {
      return
    }
    
    let index = this.state.sentence.index
    const rmetrics = {
      TotalChar:this.state.rawmetrics.TotalChar+1,
      WordsTyped:this.state.rawmetrics.WordsTyped,
      CorrectChar: this.state.rawmetrics.CorrectChar

    }
    
    //console.log("________->",Sentence.charAt(index), ">>", event.key )
    if(Sentence.charAt(index) == event.key){
      //console.log("________->",Sentence.charAt(index), ">>", event.key )
      rmetrics.CorrectChar = this.state.rawmetrics.CorrectChar + 1;
      
      if(Sentence.charAt(index) == " ") {
        rmetrics.WordsTyped = this.state.rawmetrics.WordsTyped + 1;
      
      }

      index = index +1
      if(index >= Sentence.length) {
        
        this.setState(
          {
          sentence:{
              state:FINISHED
          },
          /*
          metrics:{
            WPM:0.01,
            CPM:0.01,
            Accuracy:0.01,
          },
          rawmetrics:{
        
            WordsTyped:0,
            TotalChar:0,
            CorrectChar:0,
          }, */
          key:{
            codechar: event.key,
            type:DOWN,
          }})
          this.setState(
            {
            sentence:{
                state:FINISHED
            },
            key:{
              codechar: event.key,
              type:UP,
            }})
            
            if(this.timer != null) {
              clearInterval(this.timer);
            }

      } else {
        const [finished, remaining, curr] = this.calculateIndexs(index);
        
        this.setState(
          {
            sentence:{
              state:RUNNING,
              index:index,
              doneSentence:finished,
              nextChar:curr,
              otherSentence:remaining,
            },
          key:{
            codechar: event.key,
            type:DOWN,
          },
          rawmetrics:rmetrics
        })
          
      }
    } else {
      this.setState(
        {
          key:{
            codechar: event.key,
            type:DOWN,
          },rawmetrics:rmetrics
        })
    }

  }
  onKeyUp(event){
    console.log("keyup")
    if(this.state.sentence.state != RUNNING) {
      return
    }
    this.setState(
      {key:{
        codechar: event.key,
        type:UP,
      }}
    )
  }
  render(){
      return(
        <EventLogicContext.Provider value={this.state}>      
          <ControlContext.Provider value={{
            start:this.start,
            stop:this.stop,
          }}>
            {this.props.children}
          </ControlContext.Provider>
          </EventLogicContext.Provider>

      )
  }
}