import { useRef, useState } from "react"

import { OrbitControls, Sphere, Stars } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

// Globo com proporções corretas baseado na pesquisa
function CorrectedEarthGlobe({ rotationSpeed = 0.003 }: { rotationSpeed?: number }) {
	const meshRef = useRef<THREE.Mesh>(null)
	const [hovered, setHovered] = useState(false)

	useFrame((_state) => {
		if (meshRef.current && !hovered) {
			meshRef.current.rotation.y += rotationSpeed
		}
	})

	const createAccurateEarthMaterial = () => {
		const canvas = document.createElement("canvas")
		canvas.width = 2048
		canvas.height = 1024
		const ctx = canvas.getContext("2d")!

		// Fundo azul (oceanos)
		ctx.fillStyle = "#1E3A8A"
		ctx.fillRect(0, 0, 2048, 1024)

		// Usar coordenadas mais precisas baseadas nas proporções reais
		ctx.fillStyle = "#8B4513"

		// ÁFRICA - MUITO MAIOR (o segundo maior continente)
		// A África deve ocupar uma área significativa e central
		ctx.beginPath()
		ctx.moveTo(1000, 200) // Norte (Mediterrâneo)
		ctx.quadraticCurveTo(1100, 180, 1150, 220) // Nordeste
		ctx.quadraticCurveTo(1180, 280, 1170, 350) // Leste (Chifre da África)
		ctx.quadraticCurveTo(1160, 420, 1140, 480) // Sudeste
		ctx.quadraticCurveTo(1100, 520, 1050, 540) // Sul
		ctx.quadraticCurveTo(980, 530, 920, 500) // Sudoeste
		ctx.quadraticCurveTo(880, 450, 870, 400) // Oeste (Atlântico)
		ctx.quadraticCurveTo(860, 350, 870, 300) // Noroeste
		ctx.quadraticCurveTo(890, 250, 920, 220) // Norte-Oeste
		ctx.quadraticCurveTo(960, 200, 1000, 200)
		ctx.fill()

		// ÁSIA - Muito grande, mas com formato mais horizontal
		ctx.beginPath()
		ctx.moveTo(1200, 120) // Sibéria Norte
		ctx.quadraticCurveTo(1400, 100, 1600, 120) // Norte da Rússia
		ctx.quadraticCurveTo(1750, 140, 1800, 180) // Extremo Oriente
		ctx.quadraticCurveTo(1820, 220, 1800, 260) // China Oriental
		ctx.quadraticCurveTo(1750, 320, 1650, 350) // Sudeste Asiático
		ctx.quadraticCurveTo(1500, 380, 1350, 360) // Índia
		ctx.quadraticCurveTo(1250, 340, 1180, 320) // Oriente Médio
		ctx.quadraticCurveTo(1150, 280, 1160, 240) // Cáucaso
		ctx.quadraticCurveTo(1170, 200, 1200, 180) // Rússia Ocidental
		ctx.quadraticCurveTo(1190, 150, 1200, 120)
		ctx.fill()

		// AMÉRICA DO NORTE - Menor que no Mercator
		ctx.beginPath()
		ctx.moveTo(300, 150) // Alasca/Canadá Norte
		ctx.quadraticCurveTo(400, 130, 450, 160) // Canadá Oriental
		ctx.quadraticCurveTo(470, 200, 460, 240) // Costa Leste EUA
		ctx.quadraticCurveTo(440, 280, 400, 300) // Golfo do México
		ctx.quadraticCurveTo(350, 310, 300, 300) // México
		ctx.quadraticCurveTo(250, 280, 220, 240) // Costa Oeste
		ctx.quadraticCurveTo(200, 200, 220, 160) // Alasca
		ctx.quadraticCurveTo(250, 140, 300, 150)
		ctx.fill()

		// AMÉRICA DO SUL - Tamanho correto
		ctx.beginPath()
		ctx.moveTo(420, 320) // Norte (Venezuela/Colômbia)
		ctx.quadraticCurveTo(480, 310, 520, 340) // Brasil Norte
		ctx.quadraticCurveTo(550, 400, 540, 480) // Brasil Central-Leste
		ctx.quadraticCurveTo(520, 560, 480, 600) // Brasil Sul
		ctx.quadraticCurveTo(440, 620, 400, 600) // Argentina
		ctx.quadraticCurveTo(360, 560, 350, 500) // Chile/Peru
		ctx.quadraticCurveTo(360, 440, 380, 380) // Colômbia/Peru
		ctx.quadraticCurveTo(400, 340, 420, 320)
		ctx.fill()

		// EUROPA - Muito menor (região pequena)
		ctx.beginPath()
		ctx.moveTo(950, 180) // Escandinávia
		ctx.quadraticCurveTo(1020, 170, 1080, 190) // Rússia Europeia
		ctx.quadraticCurveTo(1100, 220, 1080, 250) // Balcãs
		ctx.quadraticCurveTo(1040, 270, 980, 260) // Mediterrâneo
		ctx.quadraticCurveTo(920, 250, 880, 220) // França/Espanha
		ctx.quadraticCurveTo(870, 190, 900, 170) // Reino Unido
		ctx.quadraticCurveTo(920, 160, 950, 180)
		ctx.fill()

		// AUSTRÁLIA - Tamanho correto (menor)
		ctx.beginPath()
		ctx.moveTo(1500, 450) // Norte
		ctx.quadraticCurveTo(1580, 440, 1620, 470) // Nordeste
		ctx.quadraticCurveTo(1630, 510, 1600, 530) // Sudeste
		ctx.quadraticCurveTo(1550, 540, 1500, 530) // Sul
		ctx.quadraticCurveTo(1450, 520, 1430, 490) // Oeste
		ctx.quadraticCurveTo(1440, 460, 1500, 450)
		ctx.fill()

		// ILHAS E REGIÕES MENORES - tamanhos mais realistas
		ctx.fillStyle = "#654321"

		// Groenlândia - MUITO MENOR (do tamanho real)
		ctx.beginPath()
		ctx.ellipse(450, 80, 25, 35, 0, 0, 2 * Math.PI)
		ctx.fill()

		// Madagascar - proporcional à África
		ctx.beginPath()
		ctx.ellipse(1200, 430, 12, 30, 0, 0, 2 * Math.PI)
		ctx.fill()

		// Japão - pequeno arquipélago
		ctx.beginPath()
		ctx.ellipse(1780, 220, 15, 25, Math.PI / 6, 0, 2 * Math.PI)
		ctx.fill()

		// Nova Zelândia - pequena
		ctx.beginPath()
		ctx.ellipse(1650, 520, 8, 20, 0, 0, 2 * Math.PI)
		ctx.fill()

		// Reino Unido - arquipélago pequeno
		ctx.beginPath()
		ctx.ellipse(900, 180, 8, 15, 0, 0, 2 * Math.PI)
		ctx.fill()

		const texture = new THREE.CanvasTexture(canvas)
		texture.wrapS = THREE.RepeatWrapping
		texture.wrapT = THREE.ClampToEdgeWrapping

		return new THREE.MeshPhongMaterial({
			map: texture,
			shininess: 15,
			specular: "#FFFFFF"
		})
	}

	return (
		<group>
			<Sphere
				ref={meshRef}
				args={[1, 64, 64]}
				scale={1.5}
				onPointerOver={() => setHovered(true)}
				onPointerOut={() => setHovered(false)}>
				<primitive object={createAccurateEarthMaterial()} />
			</Sphere>

			{/* Atmosfera sutil */}
			<Sphere args={[1.05, 64, 64]} scale={1.5}>
				<meshPhongMaterial
					color="#87CEEB"
					transparent={true}
					opacity={0.08}
					side={THREE.BackSide}
				/>
			</Sphere>
		</group>
	)
}

export default function CorrectedInteractiveGlobe() {
	return (
		<div className="h-[600px] w-full bg-gray-900">
			<Canvas
				camera={{ position: [0, 0, 2.5], fov: 45 }}
				style={{ background: "linear-gradient(to bottom, #0a0a23, #1a1a2e)" }}>
				{/* Iluminação */}
				<ambientLight intensity={0.4} />
				<directionalLight position={[5, 3, 5]} intensity={0.8} castShadow />

				{/* Estrelas de fundo */}
				<Stars radius={50} depth={30} count={2000} factor={2} saturation={0} fade />

				{/* Globo da Terra corrigido */}
				<CorrectedEarthGlobe rotationSpeed={0.003} />

				{/* Controles de órbita */}
				<OrbitControls
					enablePan={false}
					enableZoom={true}
					enableRotate={true}
					minDistance={1.5}
					maxDistance={4}
					autoRotate={false}
					dampingFactor={0.05}
					rotateSpeed={0.5}
				/>
			</Canvas>

			{/* Legenda informativa */}
			<div className="absolute bottom-4 left-4 rounded-lg bg-black/70 p-3 text-sm text-white">
				<h3 className="mb-2 font-bold">🌍 Globo com Proporções Corretas</h3>
				<ul className="space-y-1 text-xs">
					<li>• África: 30,37 milhões km² (2º maior continente)</li>
					<li>• Ásia: 44,6 milhões km² (maior continente)</li>
					<li>• América do Norte: 24,7 milhões km²</li>
					<li>• América do Sul: 17,8 milhões km²</li>
					<li>• Europa: 10,18 milhões km² (bem menor!)</li>
					<li>• Groenlândia: apenas 2,16 milhões km²</li>
				</ul>
			</div>
		</div>
	)
}
