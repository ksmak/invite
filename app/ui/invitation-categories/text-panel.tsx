import { useDrag } from 'react-dnd';

export const ItemTypes = {
    CARD: 'card',
}

export default function TextPanel() {
    const [{ isDragging }, dragRef] = useDrag(
        () => ({
          type: ItemTypes.CARD,
          collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
          
          })
        }),
        []
      )
    return (
        <div ref={dragRef} style={{
            opacity: isDragging ? 0.5 : 1,
            fontSize: 25,
            fontWeight: 'bold',
            cursor: 'move',
          }}>
        ♘
      </div>
    );
};