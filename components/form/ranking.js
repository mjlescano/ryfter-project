export default ({ min, max }) => (
  <div className='ranking-selector'>
    <style jsx>{`
      .ranking-selector {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        width: 100%;
      }

      .min-label,
      .max-label {
        flex-grow: 3;
        font-size: .875rem;
        font-weight: 400;
        padding: 0 .5rem;
        text-align: center;
        color: #A4A5AD;
      }

      .rank {
        flex-grow: 2;
        border-style: solid;
        border-width: 1px;
        border: 1px solid #F1F2F4;
        color: #A4A5AD;
        display: inline-block;
        vertical-align: middle;
        font: inherit;
        font-size: .8125rem;
        text-align: center;
        cursor: pointer;
        overflow: visible;
        white-space: nowrap;
        position: relative;
        margin: 0 0;
        line-height: 1.25rem;
        padding: .55rem 1.25rem;
        font-weight: 100;
        background-color: #fafafa;
      }
    `}</style>
    <div className='min-label'>{min || 'none'}</div>
    <div className='rank'>1</div>
    <div className='rank'>2</div>
    <div className='rank'>3</div>
    <div className='rank'>4</div>
    <div className='rank'>5</div>
    <div className='max-label'>{max || 'or more'}</div>
  </div>
)
