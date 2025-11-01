"use client"

import { useEffect, useRef, useState } from "react"

import { OrbitControls, Sphere, Stars } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

import type { EarthGlobeProps, InteractiveGlobeProps } from "./InteractiveGlobe.types"

// Componente do globo com textura pontilhada da Terra
function EarthGlobe({ rotationSpeed = 0.003 }: { rotationSpeed?: number }) {
	const meshRef = useRef<THREE.Mesh>(null)
	const [hovered, setHovered] = useState(false)

	// Rotação automática
	useFrame((state) => {
		if (meshRef.current && !hovered) {
			meshRef.current.rotation.y += rotationSpeed
		}
	})

	// Criar material customizado para simular continentes com pontilhados
	const createDottedEarthMaterial = () => {
		const canvas = document.createElement("canvas")
		canvas.width = 1024
		canvas.height = 512
		const ctx = canvas.getContext("2d")!

		// Fundo azul (oceanos)
		ctx.fillStyle = "#1E3A8A"
		ctx.fillRect(0, 0, 1024, 512)

		// Função para criar padrão de pontos
		const createDottedPattern = (
			x: number,
			y: number,
			width: number,
			height: number,
			density: number = 0.8
		) => {
			const dotSize = 2
			const spacing = 8

			for (let i = 0; i < width; i += spacing) {
				for (let j = 0; j < height; j += spacing) {
					// Aplicar densidade para criar variação natural
					if (Math.random() < density) {
						ctx.fillStyle = "#8B4513"
						ctx.beginPath()
						ctx.arc(x + i, y + j, dotSize, 0, 2 * Math.PI)
						ctx.fill()
					}
				}
			}
		}

		// América do Norte - padrão pontilhado
		ctx.fillStyle = "#8B4513"
		ctx.beginPath()
		ctx.moveTo(200, 80)
		ctx.quadraticCurveTo(250, 60, 300, 80)
		ctx.quadraticCurveTo(320, 120, 300, 160)
		ctx.quadraticCurveTo(280, 200, 240, 200)
		ctx.quadraticCurveTo(200, 180, 180, 140)
		ctx.quadraticCurveTo(190, 100, 200, 80)
		ctx.closePath()
		ctx.clip()
		createDottedPattern(180, 60, 140, 140, 0.9)
		ctx.restore()

		// América Central
		ctx.save()
		ctx.beginPath()
		ctx.moveTo(240, 200)
		ctx.quadraticCurveTo(260, 220, 280, 240)
		ctx.quadraticCurveTo(260, 260, 240, 250)
		ctx.quadraticCurveTo(220, 240, 240, 200)
		ctx.closePath()
		ctx.clip()
		createDottedPattern(220, 200, 60, 60, 0.8)
		ctx.restore()

		// América do Sul - padrão pontilhado
		ctx.save()
		ctx.beginPath()
		ctx.moveTo(260, 250)
		ctx.quadraticCurveTo(280, 270, 300, 300)
		ctx.quadraticCurveTo(320, 350, 300, 400)
		ctx.quadraticCurveTo(280, 450, 260, 460)
		ctx.quadraticCurveTo(240, 450, 220, 400)
		ctx.quadraticCurveTo(240, 350, 260, 300)
		ctx.quadraticCurveTo(250, 270, 260, 250)
		ctx.closePath()
		ctx.clip()
		createDottedPattern(220, 250, 100, 210, 0.85)
		ctx.restore()

		// Europa - padrão pontilhado
		ctx.save()
		ctx.beginPath()
		ctx.moveTo(500, 100)
		ctx.quadraticCurveTo(520, 90, 540, 100)
		ctx.quadraticCurveTo(550, 120, 540, 140)
		ctx.quadraticCurveTo(520, 150, 500, 140)
		ctx.quadraticCurveTo(490, 120, 500, 100)
		ctx.closePath()
		ctx.clip()
		createDottedPattern(490, 90, 60, 60, 0.9)
		ctx.restore()

		// África - padrão pontilhado
		ctx.save()
		ctx.beginPath()
		ctx.moveTo(520, 150)
		ctx.quadraticCurveTo(540, 160, 560, 180)
		ctx.quadraticCurveTo(580, 220, 580, 280)
		ctx.quadraticCurveTo(580, 350, 560, 400)
		ctx.quadraticCurveTo(540, 420, 520, 420)
		ctx.quadraticCurveTo(500, 400, 500, 350)
		ctx.quadraticCurveTo(500, 280, 500, 220)
		ctx.quadraticCurveTo(500, 180, 520, 150)
		ctx.closePath()
		ctx.clip()
		createDottedPattern(500, 150, 80, 270, 0.8)
		ctx.restore()

		// Ásia - padrão pontilhado
		ctx.save()
		ctx.beginPath()
		ctx.moveTo(580, 100)
		ctx.quadraticCurveTo(650, 80, 720, 100)
		ctx.quadraticCurveTo(780, 120, 800, 160)
		ctx.quadraticCurveTo(800, 200, 780, 240)
		ctx.quadraticCurveTo(750, 280, 720, 300)
		ctx.quadraticCurveTo(680, 320, 640, 320)
		ctx.quadraticCurveTo(600, 300, 580, 280)
		ctx.quadraticCurveTo(560, 240, 560, 200)
		ctx.quadraticCurveTo(560, 160, 580, 100)
		ctx.closePath()
		ctx.clip()
		createDottedPattern(560, 80, 240, 240, 0.75)
		ctx.restore()

		// Austrália - padrão pontilhado
		ctx.save()
		ctx.beginPath()
		ctx.moveTo(750, 380)
		ctx.quadraticCurveTo(780, 370, 800, 380)
		ctx.quadraticCurveTo(810, 400, 800, 420)
		ctx.quadraticCurveTo(780, 430, 750, 420)
		ctx.quadraticCurveTo(740, 400, 750, 380)
		ctx.closePath()
		ctx.clip()
		createDottedPattern(740, 370, 70, 60, 0.8)
		ctx.restore()

		// Adicionar ilhas menores importantes com pontilhados
		ctx.save()
		// Groenlândia
		ctx.beginPath()
		ctx.ellipse(350, 50, 30, 40, 0, 0, 2 * Math.PI)
		ctx.clip()
		createDottedPattern(320, 10, 60, 80, 0.7)
		ctx.restore()

		ctx.save()
		// Madagascar
		ctx.beginPath()
		ctx.ellipse(600, 320, 15, 25, 0, 0, 2 * Math.PI)
		ctx.clip()
		createDottedPattern(585, 295, 30, 50, 0.8)
		ctx.restore()

		ctx.save()
		// Japão
		ctx.beginPath()
		ctx.ellipse(800, 180, 20, 15, 0, 0, 2 * Math.PI)
		ctx.clip()
		createDottedPattern(780, 165, 40, 30, 0.9)
		ctx.restore()

		ctx.save()
		// Nova Zelândia
		ctx.beginPath()
		ctx.ellipse(800, 450, 25, 20, 0, 0, 2 * Math.PI)
		ctx.clip()
		createDottedPattern(775, 430, 50, 40, 0.8)
		ctx.restore()

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
			{/* Globo principal com textura pontilhada */}
			<Sphere
				ref={meshRef}
				args={[1, 64, 64]}
				scale={1.5}
				onPointerOver={() => setHovered(true)}
				onPointerOut={() => setHovered(false)}>
				<primitive object={createDottedEarthMaterial()} />
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

// Componente principal do globo
export function InteractiveGlobe({
	className = "",
	size = 550,
	autoRotate = false,
	rotationSpeed = 0.003,
	enableZoom = true,
	enableRotate = true
}: InteractiveGlobeProps) {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return (
			<div className={`size-[${size}px] flex items-center justify-center ${className}`}>
				<div className="h-32 w-32 animate-spin rounded-full border-b-2 border-blue-500"></div>
			</div>
		)
	}

	return (
		<div className={`size-[${size}px] relative ${className}`}>
			<Canvas
				camera={{ position: [0, 0, 2.5], fov: 45 }}
				style={{ background: "transparent" }}>
				{/* Luz ambiente */}
				<ambientLight intensity={0.4} />

				{/* Luz direcional (simula o sol) */}
				<directionalLight position={[5, 3, 5]} intensity={0.8} castShadow />

				{/* Estrelas de fundo sutis */}
				<Stars radius={50} depth={30} count={2000} factor={2} saturation={0} fade />

				{/* Globo da Terra */}
				<EarthGlobe rotationSpeed={rotationSpeed} />

				{/* Controles de órbita para interação com mouse */}
				<OrbitControls
					enablePan={false}
					enableZoom={enableZoom}
					enableRotate={enableRotate}
					minDistance={1.5}
					maxDistance={4}
					autoRotate={autoRotate}
					autoRotateSpeed={0.5}
					dampingFactor={0.05}
					rotateSpeed={0.5}
				/>
			</Canvas>
		</div>
	)
}
