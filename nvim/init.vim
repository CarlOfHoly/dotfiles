call plug#begin()
Plug 'tpope/vim-surround'
Plug 'arcticicestudio/nord-vim'
Plug 'neoclide/coc.nvim', {'branch': 'release'}
Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
Plug 'junegunn/fzf.vim'
Plug 'junegunn/gv.vim'
Plug 'junegunn/rainbow_parentheses.vim'
Plug 'airblade/vim-rooter'
Plug 'tpope/vim-fugitive'
Plug 'tpope/vim-rhubarb'
Plug 'mhinz/vim-signify'
Plug 'norcalli/nvim-colorizer.lua'
Plug 'justinmk/vim-sneak'
Plug 'unblevable/quick-scope'
Plug 'mhinz/vim-startify'
Plug 'leafgarland/typescript-vim'
Plug 'peitalin/vim-jsx-typescript'
Plug 'honza/vim-snippets'
Plug 'kevinhwang91/rnvimr', {'do': 'make sync'}
call plug#end()

set termguicolors
colorscheme nord

let g:python_host_prog = '/usr/bin/python2'
let g:python3_host_prog = '/usr/bin/python3'

let g:coc_global_extensions = [
	\ 'coc-tsserver',
	\ 'coc-eslint',
  \ 'coc-snippets',
  \ 'coc-metals'
	\ ]

source $HOME/.config/nvim/plug-config/coc.vim
source $HOME/.config/nvim/general/settings.vim
source $HOME/.config/nvim/plug-config/fzf.vim
source $HOME/.config/nvim/plug-config/rainbow.vim
source $HOME/.config/nvim/plug-config/sneak.vim
source $HOME/.config/nvim/plug-config/quickscope.vim
source $HOME/.config/nvim/plug-config/start-screen.vim
source $HOME/.config/nvim/plug-config/tsx.vim
source $HOME/.config/nvim/plug-config/snippets.vim
source $HOME/.config/nvim/keys/mappings.vim
source $HOME/.config/nvim/plug-config/rnvimr.vim
luafile $HOME/.config/nvim/lua/plug-colorizer.lua
