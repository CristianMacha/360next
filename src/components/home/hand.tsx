'use client'
import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/Addons.js";
import styles from './hand.module.css';

export default function Hand() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const containerScene = document.getElementById("hand-scene");
        const scene = new THREE.Scene();
        scene.background = null;

        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 550;

        const purpleLight = new THREE.PointLight(0xbcf500); // Purple color
        purpleLight.position.set(-600, +10, -300);
        purpleLight.scale.set(1, 1, 1);
        purpleLight.intensity = 10;
        purpleLight.decay = 0.1;
        scene.add(purpleLight);

        const blueLight = new THREE.PointLight(0xbcf500);
        blueLight.position.set(-90, 0, 1);
        blueLight.scale.set(1, 1, 1);
        blueLight.distance = 1605;
        blueLight.intensity = 10;
        blueLight.decay = 0.1;
        scene.add(blueLight);

        const blueLightTop = new THREE.PointLight(0xffffff);
        blueLightTop.position.set(0, +200, 100);
        blueLightTop.scale.set(1, 1, 1);
        blueLightTop.distance = 160;
        blueLightTop.intensity = 10;
        blueLightTop.decay = 0.1;
        scene.add(blueLightTop);

        const blueLightCenter = new THREE.PointLight(0xbcf500);
        blueLightCenter.position.set(0, +90, 100);
        blueLightCenter.scale.set(1, 1, 1);
        blueLightCenter.distance = 160;
        blueLightCenter.intensity = 10;
        blueLightCenter.decay = 0.1;
        scene.add(blueLightCenter);

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerScene?.appendChild(renderer.domElement);

        let loadedObject: THREE.Group<THREE.Object3DEventMap>;
        const loader = new FBXLoader();
        loader.load(
            "https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Fmanito.fbx?alt=media&token=ab700e94-1d5e-42bf-aa84-371cd1ddfebf",
            (fbx) => {
                fbx.rotation.z += 0.5;
                fbx.position.y -= 155;
                fbx.position.x += 120;
                fbx.scale.set(1.2, 1.2, 1.2);
                loadedObject = fbx;

                gsap.timeline({
                    scrollTrigger: {
                        trigger: ".container-scene",
                        scrub: 1,
                    },
                }).to(loadedObject.rotation, {
                    z: Math.PI * 0.9,
                    ease: "none",
                    duration: 3,
                });
                scene.add(fbx);
            }
        );

        const animate = () => {
            // if (loadedObject) {
            //     loadedObject.rotation.z += 0.01;
            // }
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        animate();
        window.addEventListener("resize", onWindowResize);
    }, []);

    return (
        <>
            <section className={`h-[661px] flex justify-center self-stretch relative ${styles.hand} lg:h-[982px] overflow-hidden`}>
                <div className={`${styles.wrapper} z-[2]`}></div>
                <div className="absolute top-[76px]">
                    <h2
                        className="text-white font-secondary text-[150px]  leading-[normal] lg:text-[344px] lg:leading-[250px]"
                    >
                        EL MUNDO
                    </h2>
                </div>
                <div className={`w-[390px] h-[608px] shrink-0 ${styles.hand_image} block lg:hidden`}></div>
                <div className="hidden lg:block relative mt-[6rem]">
                    <div id="hand-scene" className="container-scene"></div>
                </div>
                <div className="absolute bottom-[41px] z-[2]">
                    <div
                        className="text-[#bcf500] font-secondary text-[90px] not-italic font-normal leading-[normal] lg:text-[150px] lg:leading-[120px]"
                    >
                        EN TUS MANOS
                    </div>
                </div>
            </section>
        </>
    )
}