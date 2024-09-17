import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import '../styles/components/CommentPlanet.scss';

const Card = ({ position, userData, scale, isSelected, selectedCard, onSelect, avatar, nickname, comment }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [clicked, setClicked] = useState(false);
  const { camera } = useThree();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.quaternion.copy(camera.quaternion);
      if (isSelected) {
        const cameraDirection = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
        const targetPosition = camera.position.clone().add(cameraDirection.multiplyScalar(2));
        meshRef.current.position.lerp(targetPosition, 0.1);
      } else {
        meshRef.current.position.lerp(position, 0.1);
      }
    }
  });

  const handlePointerDown = (event) => {
    event.stopPropagation();
    console.log('Card clicked:', userData.index);
    onSelect(userData.index);
  };

  return (
    <mesh
      ref={meshRef}
      scale={isSelected ? scale * 2 : scale}
      userData={userData}
    >
      <planeGeometry args={[1, 1.5]} />
      <meshBasicMaterial color={clicked ? 'yellow' : 'white'} />
      <Html position={[0, 0, 0.01]} transform occlude>
        <div 
          onClick={(event) => {
            setClicked(!clicked);
            handlePointerDown(event);
          }} 
          className={`comment ${isSelected ? 'selected' : ''}`}
        >
          <div className="userinfo">
            <img src={avatar} alt={nickname} className="avatar" />
            <h3>{nickname}</h3>
          </div>
          <p>{comment}</p>
        </div>
      </Html>
    </mesh>
  );
};

const Planet = ({ cards }) => {
  const planetRef = useRef<THREE.Group>(null);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  useFrame(() => {
    // if (planetRef.current && selectedCard === null) {
    //   planetRef.current.rotation.y += 0.001;
    // }
  });

  const radius = 5;
  const cardScale = 0.5;

  const cardPositions = cards.map((_, index) => {
    const phi = Math.acos(-1 + (2 * index) / cards.length);
    const theta = Math.sqrt(cards.length * Math.PI) * phi;

    return new THREE.Vector3(
      radius * Math.cos(theta) * Math.sin(phi),
      radius * Math.sin(theta) * Math.sin(phi),
      radius * Math.cos(phi)
    );
  });

  const handleCardSelect = (index: number) => {
    console.log('handleCardSelect called with index:', index);
    setSelectedCard(prevSelected => prevSelected === index ? null : index);
  };

  return (
    <group ref={planetRef}>
      {cards.map((card, index) => (
        <Card
          key={index}
          position={cardPositions[index]}
          scale={cardScale}
          isSelected={selectedCard === index}
          selectedCard={selectedCard}
          onSelect={handleCardSelect}
          userData={{ index }}
          {...card}
        />
      ))}
    </group>
  );
};

const PlanetCardsComponent = () => {
  const [cards, setCards] = useState<Array<{avatar: string, nickname: string, comment: string}>>([]);

  useEffect(() => {
    let dummyCards = Array(10).fill(null).map((_, i) => ({
      avatar: `./assets/images/me.jpg`,
      nickname: `User${i}`,
      comment: `Курайс крутой`
    }));
    setCards(dummyCards);
  }, []);

  return (
    <div className="card planet">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Planet cards={cards} />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default PlanetCardsComponent;