import Section from './section'

const kinds = {
  section: Section
}

export default ({ item }) => {
  const Item = kinds[item.kind]

  return (
    <div className={`form-item form-item-${item.kind} paper-row`}>
      <style jsx>{`
        .form-item {
          position: relative;
          padding-top: 1rem;
          padding-bottom: 1rem;
          transition: background-color .04s ease-in-out;
        }

        .form-item:hover {
          background-color: #FAFAFA;
        }

        .form-item:hover .grabber {
          opacity: 1;
        }

        .grabber {
          position: absolute;
          left: 0;
          top: 0;
          width: 1.875rem;
          height: 100%;
          padding: 1rem .5rem;
          cursor: -webkit-grab;
          cursor: grab;
          opacity: 0;
          transition: opacity .1s ease-in-out;
        }

        .grabber::after {
          content: ' ';
          display: block;
          width: 100%;
          height: 100%;
          background-image:
            radial-gradient(#d5d5d5 25%, transparent 26%),
            radial-gradient(#d5d5d5 25%, transparent 26%);
          background-size: .5rem .5rem;
        }
      `}</style>
      <div className='grabber' />
      <Item {...item} />
    </div>
  )
}
