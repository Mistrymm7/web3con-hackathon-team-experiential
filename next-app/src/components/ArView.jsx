// import { Text } from '@react-three/drei';
import { ARCanvas, DefaultXRControllers, Interactive } from '@react-three/xr';
import { useState } from 'react';

function DBox({ color, size, scale, children, ...rest }) {
  return (
    <mesh scale={scale} {...rest}>
      <boxBufferGeometry attach="geometry" args={size} />
      <meshPhongMaterial attach="material" color={color} />
      {children}
    </mesh>
  );
}

function Button(props) {
  const [hover, setHover] = useState(false);
  const [color, setColor] = useState('blue');

  const onSelect = () => {
    setColor((Math.random() * 0xffffff) | 0);
  };

  return (
    <Interactive
      onHover={() => setHover(true)}
      onBlur={() => setHover(false)}
      onSelect={onSelect}
    >
      <DBox
        color={color}
        scale={hover ? [0.6, 0.6, 0.6] : [0.5, 0.5, 0.5]}
        size={[0.4, 0.1, 0.1]}
        {...props}
      >
        {/* <Text
          position={[0, 0, 0.06]}
          fontSize={0.05}
          color="#000"
          anchorX="center"
          anchorY="middle"
        >
          Hello react-xr!
        </Text> */}
      </DBox>
    </Interactive>
  );
}

const ArView = () => {
  return (
    <ARCanvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Button position={[0, 0.1, -0.2]} />
      <DefaultXRControllers />
    </ARCanvas>
  );
};

export default ArView;