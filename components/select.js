export default (props) => {
  const { children } = props

  return (
    <div className='select-wrapper'>
      <style jsx>{`
        .select-wrapper {
          position: relative;
          display: inline-block;
        }

        .triangle {
          position: absolute;
          right: .8rem;
          top: calc(50% - .12rem);
          display: block;
          width: 0;
          height: 0;
          border-left: .25rem solid transparent;
          border-right: .25rem solid transparent;
          border-top: .25rem solid #575B6B;
        }

        select {
          display: inline-block;
          border-style: solid;
          border-width: 1px;
          border-color: #A4A5AD;
          vertical-align: middle;
          height: 2.5rem;
          font: inherit;
          font-size: .8125rem;
          cursor: pointer;
          overflow: visible;
          white-space: nowrap;
          position: relative;
          margin: 0 0;
          line-height: 1.25rem;
          padding: .55rem 2rem .55rem 1rem;
          border-radius: .2rem;
          font-weight: 100;
          background-color: #fff;
          appearance: none;
        }
      `}</style>
      <select {...props}>
        {children}
      </select>
      <div className='triangle' />
    </div>
  )
}
