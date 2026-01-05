import { Image, Text3D } from "@react-three/drei";

export default function BackgroundImage(props) {

  function Title(props) {
    return <Text3D {...props} 
      font={'fonts/christmasFont.json'}
      size={6} 
      height={0.5} 
      curveSegments={15} 
      bevelEnabled 
      bevelThickness={0.03} 
      bevelSize={0.01} 
      bevelOffset={0} 
      bevelSegments={5} 
    >
      Merry0Christmas!
      <meshStandardMaterial color={'#ffd29f'} />
    </Text3D>
  }
  function Details(props) {
    return <Text3D {...props} 
      font={'fonts/sriracha.json'}
      size={2} 
      height={0.5} 
      curveSegments={15} 
      bevelEnabled 
      bevelThickness={0.03} 
      bevelSize={0.01} 
      bevelOffset={0} 
      bevelSegments={5} 
    >
      {`solve the puzzle to unwrap your gift\nuse arrow keys to move\nspacebar to shoot`}
      <meshStandardMaterial color={'#ffd29f'} />
    </Text3D>
  }
  return (
    <group {...props}>
      <group name='text' position={[-12, 7, -5]}>
        <Title position={[-20, 5, 0]} />
        <Details position={[-20, -4, 0]} />
        <mesh name='text-background' scale={[200, 100, 1]} position={[0, 0, 0]}>
          <circleGeometry args={[1, 128]} />
          <meshStandardMaterial color={'#000000'} transparent opacity={0.8} />
        </mesh>
      </group>
      <Image url='images/christmasBackdrop2.png' scale={[160, 80, 1]} position={[0, 0, -6]} />
    </group>
  )
}