const fs = require('fs');
let content = fs.readFileSync('client/src/pages/ai-hub.tsx', 'utf8');

// 1. Add Voice Assistant item in "AI Chat"
const aiChatMatch = content.match(/title: "AI Chat",\n\s*icon: MessageSquareText,\n\s*items: \[/);
if (aiChatMatch) {
  content = content.replace(
    aiChatMatch[0],
    `${aiChatMatch[0]}
          {
            title: "Voice Assistant",
            desc: "Talk to Nyaya AI using voice for a hands-free, interactive experience.",
            video: "",
            points: ["Voice recognition", "Real-time responses", "Hands-free operation"],
          },`
  );
}

// 2. Add VoiceAssistantSection and RobotModel
const sectionToInsert = `
function RobotModel() {
  const { scene } = useGLTF("/models/LexAI_Robot_Final.glb");
  const robotRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!robotRef.current) return;
    
    // Make robot track mouse
    const targetX = (state.mouse.x * Math.PI) / 4;
    const targetY = (state.mouse.y * Math.PI) / 4;
    
    // Smooth interpolation
    robotRef.current.rotation.y += (targetX - robotRef.current.rotation.y) * 0.1;
    robotRef.current.rotation.x += (-targetY - robotRef.current.rotation.x) * 0.1;

    // Idle animation (floating)
    robotRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <primitive ref={robotRef} object={scene} scale={2.5} position={[0, -1.5, 0]} />
    </Float>
  );
}

function VoiceAssistantSection() {
  return (
    <Section
      id="voice-assistant"
      kicker="Hands-free interaction"
      title="Meet your new AI Voice Assistant"
      description="Talk directly with Nyaya AI for instant, voice-enabled legal assistance. The same powerful engine, now with a conversational interface."
    >
      <div className="rounded-[30px] border bg-white/55 p-2 shadow-sm backdrop-blur">
        <div className="grid gap-6 rounded-[26px] border bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,255,255,0.70))] p-6 md:p-8 md:grid-cols-[1fr,1.2fr] md:items-center">
          
          <div className="relative h-[300px] md:h-[450px] rounded-[22px] border bg-[hsl(var(--background))] overflow-hidden" data-testid="container-voice-assistant-3d">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={1.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
              <pointLight position={[-10, -10, -10]} intensity={1} />
              <RobotModel />
              <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={5} blur={2} far={4} />
              <Environment preset="city" />
            </Canvas>
          </div>

          <div className="grid gap-6">
            <div>
              <div className="text-xl font-semibold mb-2" data-testid="text-voice-assistant-subtitle">Speak, and let AI do the work</div>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed" data-testid="text-voice-assistant-desc">
                Experience a completely new way to interact with your legal workspace. The voice assistant uses advanced speech recognition and natural language processing to understand your queries and provide spoken, citation-backed responses.
              </p>
            </div>

            <div className="grid gap-4" data-testid="grid-voice-assistant-features">
              {[
                { title: "Press & Speak", desc: "Just hit the mic icon and ask your question naturally.", icon: MessageSquareText },
                { title: "Interactive LED Expressions", desc: "The robot reacts to your queries with pixel-perfect expressions.", icon: Sparkles },
                { title: "Same Trusted Engine", desc: "Powered by the exact same reliable Nyaya AI backend.", icon: ShieldCheck },
              ].map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="flex gap-4 p-4 rounded-2xl border bg-white/80 shadow-sm transition hover:bg-white" data-testid={\`card-voice-feature-\${idx}\`}>
                    <div className="flex-shrink-0 mt-1">
                      <span className="grid h-10 w-10 place-items-center rounded-xl border bg-[hsl(var(--background))] text-[hsl(var(--primary))]">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm" data-testid={\`text-voice-feature-title-\${idx}\`}>{feature.title}</div>
                      <div className="mt-1 text-sm text-[hsl(var(--muted-foreground))]" data-testid={\`text-voice-feature-desc-\${idx}\`}>{feature.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
}
`;

const aiHubLandingMatch = content.match(/export default function AiHubLanding\(\) \{/);
if (aiHubLandingMatch) {
  content = content.replace(aiHubLandingMatch[0], sectionToInsert + "\n\n" + aiHubLandingMatch[0]);
}

// 3. Add to AiHubLanding
const aiHubMatch = content.match(/<AiHub \/>/);
if (aiHubMatch) {
  content = content.replace(aiHubMatch[0], `${aiHubMatch[0]}\n      <VoiceAssistantSection />`);
}

fs.writeFileSync('client/src/pages/ai-hub.tsx', content);
