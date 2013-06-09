package org.paradox.updater.transforms;

import org.objectweb.asm.Opcodes;
import org.objectweb.asm.Type;
import org.objectweb.asm.tree.*;
import org.paradox.updater.model.FieldContainer;
import org.paradox.updater.model.Transform;

/**
 *
 */
public class EntityDef extends Transform {
    @Override
    public boolean validate(ClassNode classNode) {
        for(MethodNode mn : classNode.methods) {
            if(mn.desc.contains("(I)")) {
                for(AbstractInsnNode insnNode : mn.instructions.toArray()) {
                    if(insnNode.getOpcode() == Opcodes.LDC) {
                        LdcInsnNode ldc = (LdcInsnNode) insnNode;
                        if(ldc.cst.toString().contains("Glacor")) {
                            return true;
                        }
                    }

                }
            }
        }
        return false;
    }

    @Override
    public void execute(ClassNode classNode) {
        for(FieldNode fn : classNode.fields) {
            if(Type.getType(fn.desc).equals(Type.LONG_TYPE) ) {
                FieldContainer container = new FieldContainer(classNode, fn, "getId");
                addField(container);
            }
        }
    }
}
