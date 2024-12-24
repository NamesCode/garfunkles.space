{
  description = "Garfunkles.space: My shitty website. NOW IN VEL!";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs =
    {
      self,
      nixpkgs,
    }:
    let
      system = "aarch64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
    in
    {
      devShells.aarch64-linux.default = pkgs.mkShell {
        nativeBuildInputs = with pkgs; [
          # Build tools
          dart-sass
          pandoc
          # velox

          # LSPs
          emmet-language-server
          nodePackages.vscode-langservers-extracted
        ];

        shellHook = ''echo "You've now entered the devshell for Garfunkles.space. Build with ./build.sh"'';
      };
    };
}
