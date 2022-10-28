type TagType = {
    name: string
}

const Tag = ( { name }: TagType ) => {
  return (
    <button id="tag">{ name }</button>
  )
}

export default Tag