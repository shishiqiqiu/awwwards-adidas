import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { createMaterials } from "@/lib/material";
import { TextureKey } from "@/lib/textures";
import { useShirtSectionTextures } from "@/lib/useTextures";

type GLTFResult = {
  nodes: {
    [name: string]: THREE.Mesh;
  };
};
export function FirstGrayModel() {
  const { nodes } = useGLTF(
    "/models/gray/GrayStudio.glb",
  ) as unknown as GLTFResult;
  const textures = useShirtSectionTextures("gray", "first");
  const mats = createMaterials(textures) as Record<
    TextureKey<"gray", "first">,
    THREE.MeshBasicMaterial
  >;
  return (
    <group dispose={null}>
      <mesh geometry={nodes.Shirt_Gray.geometry} position={[0, 0.7, 0]} material={mats.shirt}/>
      <mesh geometry={nodes.Floor.geometry} material={mats.floor}/>
      <mesh geometry={nodes.Wall.geometry} material={mats.wall}/>
      <mesh geometry={nodes.Asset.geometry} material={mats.assets}/>
    </group>
  );
}

useGLTF.preload("/models/gray/GrayStudio.glb");
