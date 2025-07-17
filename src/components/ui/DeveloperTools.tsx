"use client";
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import DeploymentVisual from "./DeploymentVisual";
import { Loader2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DeveloperTools() {
  const [code, setCode] = useState(`
<!DOCTYPE html>
<html>
<head>
  <title>Tic Tac Toe</title>
  <style>
    body {
      font-family: sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: #111;
      color: #fff;
    }
    .board {
      display: grid;
      grid-template-columns: repeat(3, 100px);
      grid-template-rows: repeat(3, 100px);
      gap: 5px;
    }
    .cell {
      background: #222;
      font-size: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border: 2px solid #444;
      transition: background 0.3s;
    }
    .cell:hover {
      background: #333;
    }
    .winner {
      margin-top: 20px;
      font-size: 1.5rem;
      text-align: center;
    }
  </style>
</head>
<body>
  <div>
    <div class="board" id="board"></div>
    <div class="winner" id="winner"></div>
  </div>

  <script>
    const boardEl = document.getElementById('board');
    const winnerEl = document.getElementById('winner');
    let currentPlayer = 'X';
    let board = Array(9).fill(null);
    let gameOver = false;

    function renderBoard() {
      boardEl.innerHTML = '';
      board.forEach((cell, index) => {
        const cellEl = document.createElement('div');
        cellEl.className = 'cell';
        cellEl.textContent = cell;
        cellEl.addEventListener('click', () => handleClick(index));
        boardEl.appendChild(cellEl);
      });
    }

    function handleClick(index) {
      if (board[index] || gameOver) return;
      board[index] = currentPlayer;
      if (checkWinner()) {
        winnerEl.textContent = currentPlayer + ' wins!';
        gameOver = true;
      } else if (board.every(cell => cell)) {
        winnerEl.textContent = "It's a draw!";
        gameOver = true;
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
      renderBoard();
    }

    function checkWinner() {
      const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
        [0, 4, 8], [2, 4, 6]             // diags
      ];
      return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return board[a] && board[a] === board[b] && board[b] === board[c];
      });
    }

    renderBoard();
  </script>
</body>
</html>

  `);
  const [githubUrl, setGithubUrl] = useState("");
  const [deployedUrl, setDeployedUrl] = useState("");
  const [isDeploying, setIsDeploying] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("blank");
  const [livePreview, setLivePreview] = useState(code);

  useEffect(() => {
    setLivePreview(code);
  }, [code]);

  const handleDeploy = async () => {
    setIsDeploying(true);
    // Simulate deployment process
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setDeployedUrl(
      `https://http3.io/${Math.random().toString(36).substring(7)}`
    );
    setIsDeploying(false);
  };

  const handleTemplateChange = (value: string) => {
    setSelectedTemplate(value);
    switch (value) {
      case "blank":
        setCode("");
        break;
      case "landing":
        setCode(
          `<html><body><h1>Welcome to my landing page</h1></body></html>`
        );
        break;
      case "blog":
        setCode(
          `<html><body><h1>My Blog</h1><article>First post</article></body></html>`
        );
        break;
    }
  };

  return (
    <section className="mb-12 mt-70">
      <h2 className="text-5xl font-semibold mb-8 text-center">
        Deploy Your Website on Smart Contracts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/10 backdrop-blur-sm flex items-center justify-center">
            <span className="text-lg font-semibold text-primary">
              Coming Soon
            </span>
          </div>
          <CardHeader>
            <CardTitle>Smart Contract Deployment</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-background p-4 rounded-md opacity-50">
              <code>$ http3 deploy ./my-website</code>
            </pre>
            <p className="mt-4 text-sm text-muted-foreground opacity-50">
              Deploy your website directly to the blockchain using our CLI tool.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-secondary">
          <CardHeader>
            <CardTitle>Instant Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-background p-4 rounded-md">
              <code>Preview: https://ba..ipfs.link/</code>
            </pre>
            <p className="mt-4 text-sm text-muted-foreground">
              Get an instant preview link to share your deployed website.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-secondary">
          <CardHeader>
            <CardTitle>Web3 Integration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-background p-4 rounded-md text-center">
              Smart Contract Interaction
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Easily integrate Web3 functionality into your deployed website.
            </p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardContent className="p-6">
          <Tabs defaultValue="editor" className="space-y-4">
            <TabsList>
              <TabsTrigger value="editor">Code Editor</TabsTrigger>
            </TabsList>
            <TabsContent value="editor" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="code-editor" className="text-lg">
                    Code Editor
                  </Label>
                  <Textarea
                    id="code-editor"
                    placeholder="Enter your HTML/CSS/JavaScript code here"
                    value={code}
                    onChange={(e) => {
                      setCode(e.target.value);
                      setLivePreview(e.target.value);
                    }}
                    className="min-h-[400px] font-mono text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="live-preview" className="text-lg">
                    Live Preview
                  </Label>
                  <div className="border rounded-lg overflow-hidden h-[400px] bg-white">
                    <iframe
                      id="live-preview"
                      srcDoc={livePreview}
                      className="w-full h-full"
                      title="Live Preview"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="github">
              <Input
                placeholder="Enter GitHub repository URL"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                className="mb-4"
              />
            </TabsContent>
          </Tabs>
          <div className="mt-6">
            <Button disabled={isDeploying} size="lg">
              {isDeploying ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Deploying...
                </>
              ) : (
                "Deploy to HTTP3"
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
      {/* {deployedUrl && <DeploymentVisual deployedUrl={deployedUrl} />} */}
    </section>
  );
}
