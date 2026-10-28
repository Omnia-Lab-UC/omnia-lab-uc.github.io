{
  description = "Omnia Lab website development shell";

  # nixos-unstable has dropped Ruby 3.3; the 26.05 release still ships it.
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-26.05";

  outputs = { nixpkgs, ... }:
    let
      systems = [ "x86_64-linux" "aarch64-linux" "x86_64-darwin" "aarch64-darwin" ];
      forAllSystems = f: nixpkgs.lib.genAttrs systems (system: f nixpkgs.legacyPackages.${system});
    in
    {
      devShells = forAllSystems (pkgs:
        let
          # GitHub Pages builds this site with Ruby 3.3: https://pages.github.com/versions/
          ruby = pkgs.ruby_3_3;
          # Ruby 3.3's default Bundler 2.5 clashes with the RubyGems 3.7 that nixpkgs ships it with.
          bundler = pkgs.bundler.override { inherit ruby; };
        in
        {
          default = pkgs.mkShell {
            # bundler goes first so its `bundle` shadows the one bundled with Ruby.
            packages = [ bundler ruby ] ++ (with pkgs; [ pkg-config libffi zlib ]);

            # Gems are managed by Bundler and installed into the gitignored vendor/ folder.
            shellHook = ''
              export BUNDLE_PATH="$PWD/vendor/bundle"
            '';
          };
        });
    };
}
