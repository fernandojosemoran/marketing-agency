import os
import shutil

apps_base_dir = 'apps'


def remove_directory(path):
    if os.path.exists(path):
        shutil.rmtree(path)
        print(f"delete: {path}")
    else:
        print(f"directory not exist: {path}")


def create_directory(path):
    os.makedirs(path, exist_ok=True)


def list_directories(path):
    return [d for d in os.listdir(path) if os.path.isdir(os.path.join(path, d))]


core_pycache_dir = 'core/__pycache__'
remove_directory(core_pycache_dir)

apps_pycache_dir = 'apps/__pycache__'
remove_directory(apps_pycache_dir)

apps_list = list_directories(apps_base_dir)

for app in apps_list:
    app_path = os.path.join(apps_base_dir, app)

    if os.path.isdir(app_path) and app != '__init__.py':
        pycache_app_dir = os.path.join(app_path, '__pycache__')
        migrations_dir = os.path.join(app_path, 'migrations')

        remove_directory(pycache_app_dir)
        remove_directory(migrations_dir)

        create_directory(migrations_dir)

print("process finished")
